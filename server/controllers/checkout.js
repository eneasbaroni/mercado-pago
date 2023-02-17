import mercadopago from 'mercadopago';
import {getOrder} from '../services/checkout.js';

import {newPurchase, notification} from '../middleware/nodemailer.js'


const postCheckout = async (req, res) => { 
  
  const {name, phone, identification, address} = req.body.payer;
  const products = req.body.products;
  
  //ANALIZAR EN EL EJEMPLO DE LA CERTIFICAION COMO SE ARMA EL USUARIO. CIERTOS DATOS TIENEN QUE SER OBJETOS
  const payer = {
    name,
    phone,      
    identification,
    address
  }

  console.log('user', payer);
  console.log('products', products);
    
  try {
    const order = await getOrder(payer, products);
    res.status(200).json(order);  
  }
  catch (error) {
    res.status(500).send({error: error.message});
  }   
     
}

const getNotifications = async (req, res) => {  
  const {body, query, params} = req;
  console.log('params', params);  //verificando si llegan el usuarioid y el productid  

  //obtenemos el topic (tipo denotificacion) y el id de la notificacion para luego buscar la orden de compra
  const {topic, id} = query; 
  //console.log(topic, id);

  let merchantOrder;  

  if (topic == 'payment') { //si el topic es payment, buscamos el payment para extraer el id y buscar la merchant order
    let payment = await mercadopago.payment.findById(id);
    merchantOrder = await mercadopago.merchant_orders.findById(payment.body.order.id)
    for (let i = 0; i < merchantOrder.body.payments.length; i++) { //dentro de la merchant order puede haber mas de un pago, por eso recorremos el array de payments

      switch (merchantOrder.body.payments[i].status) {
        case 'approved':
          //console.log(`payment id ${merchantOrder.body.payments[i].id} pagado`);
          //console.log('Email del Usuario', params.userEmail, 'Telefono Del Usuario', params.userPhone); //devolviendo los ID para poder utilizarlos en el front
          newPurchase(params.userEmail, 'approved');
          notification(params.userEmail, params.userPhone, merchantOrder.body.payments[i].id, 'approved');
          break;
        case 'rejected':
          //console.log(`payment id ${merchantOrder.body.payments[i].id} rechazado`);
          newPurchase(params.userEmail, 'rejected');
          notification(params.userEmail, params.userPhone, merchantOrder.body.payments[i].id, 'rejected');
          break;
        case 'pending':
          //console.log(`payment id ${merchantOrder.body.payments[i].id} pendiente`);
          newPurchase(params.userEmail, 'pending');
          notification(params.userEmail, params.userPhone, merchantOrder.body.payments[i].id, 'pending');
          break;
        default:
          console.log(`desde el default: payment id ${merchantOrder.body.payments[i].id} en estado ${merchantOrder.body.payments[i].status}`);
          break;
      }
      
    }
  } 
  
  res.status(200).send("ok");
}

const getCheckout = (req, res) => {
  
}

const deleteCheckout = (req, res) => {
  
}

const putCheckout = (req, res) => {
  
}

export { getCheckout, getNotifications, postCheckout, deleteCheckout, putCheckout };



