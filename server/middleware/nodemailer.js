import { createTransport } from "nodemailer";

const EMAIL = process.env.EMAIL
const MAIL_PASS = process.env.MAILPASS

const transporter = createTransport({
  service: 'gmail',  
  port: 587,
  auth: {
      user: EMAIL,
      pass: MAIL_PASS,
  }
});

/* funcion para enviar el mail */

const sendMail = async (data) => {  

  const emailContent = {
    from: "D'art Tienda",
    to: EMAIL,
    subject: "Nuevo Registro",
    text: "Hello coders",    
    html: `<h1 style='color: black'>Nuevo Usuario Registrado</h1><p>Nombre: ${data.username}</p><p>Email: ${data.email}</p><p>Edad: ${data.edad}</p><p>Telefono: ${data.telefono}</p><p>Direccion: ${data.direccion}</p><p>Imagen: ${data.image}</p>`,  
  };

  try {
    const info = await transporter.sendMail(emailContent);     
  } catch (error) {
    console.log('erro de nodemailer', error);
  }

}


const newPurchase = async (userMail, status) => {  

  let notification;
  
  if (status == 'approved') {
    notification = 'Tu pago ha sido aprobado, nos pondremos en contacto para coordinar la entrega de los productos'
  }
  if (status == 'rejected') {
    notification = 'Tu pago ha sido rechazado, por favor intenta nuevamente'
  }
  if (status == 'pending') {
    notification = 'Tu pago se encuentra pendiente, nos pondremos en contacto para coordinar la entrega de los productos'
  }
  if (status == 'in_process') {
    notification = 'Tu pago se encuentra en proceso, nos pondremos en contacto para coordinar la entrega de los productos'
  }

  const emailContent = {
    from: "D'art Tienda",
    to: userMail,
    subject: "Nueva Compra Realizada",
    text: "Hello D'art",    
    html: `<h3 style='color: black'>${notification}</h3>`, 
  };  

  try {
    const info = await transporter.sendMail(emailContent);     
  } catch (error) {
    console.log('erro de nodemailer', error);
  }

}

const notification = async (userMail, userPhone, paymentId, status) => {
  const email = userMail;
  const phone = userPhone;   

  const emailContent = {
    from: "D'art Tienda",
    to: EMAIL,
    subject: `Nuevo Pedido de: ${email}`,
    text: "Hello D'art",
    html: `
    <h3 style='color: black'>Nuevo Pedido de: ${email}</h3>    
    <p>Email: ${email}</p>
    <p>El telefono del comprador es: ${phone}</p>  
    <p>Id del pago es: ${paymentId}</p> 
    <p>El estado del pago es: ${status}</p> 
    `,
  };

  try {
    const info = await transporter.sendMail(emailContent);
  } catch (error) {
    console.log('erro de nodemailer', error);
  }
}

export {sendMail, newPurchase, notification};