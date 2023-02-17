import mercadopago from 'mercadopago';
import '../config/mercadopago.js'



const getOrder = async (user, products) => {
  let preference = {
    //mercado pago devuelve una respuesta que puede ser success, failure o pending. segun el estado de la compra. las utilizamos para redireccionar al usuario
    back_urls: {
      //luego de terminar la compra, mercado pago redirecciona al usuario a esta url
      //HACER EN EL FRONT VISTAS PARA ESTOS 3 ESTADOS
      success: "http://localhost:3000/", 
      failure: "http://localhost:3000/failure", 
      pending: "http://localhost:3000/pending",
    },
    items: products, //le paso los productos que tengo en el carrito
    
    /* EL payer(user) esta llegando como un solo objeto con clave/valor. MP pide pasar cada dato a un objeto diferente */
    payer: {
      name: user.name,
      phone: {number: parseInt(user.phone)},
      identification: {type: 'EMAIL', number: user.identification},
      address: { dir: user.address, zip_code: '0000', city: 'CABA', state: 'CABA', country: 'AR' } //Corregir para traer estos datos desde el formulario       
    },    
    notification_url: `https://a1a2-200-69-145-98.sa.ngrok.io/notifications/${user.identification}/${user.phone}`, //la url de notificacion es la que recibe las notificaciones de mercado pago. 
  };

  return (
    mercadopago.preferences
    .create(preference) 
    .then(function (response) {
      console.log('preferenceId',response.body.id); //este es el id de la preferencia, sirve para el front para poder generar el script con la pasarela de pago
      //console.log(response.body.init_point); //La init_point un link de pago externo
      //console.log(response);
      //return (response.response); //Esta es toda la info de la respuesta, lo optimo es devolver el codigo para el script de mercado pago
      return (response.body.id); //Este es codigo para el script de mercado pago
    })
  )
  .catch(function (error) {
    console.log(error);
  }); 
}

export {getOrder};