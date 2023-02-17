import dotenv from 'dotenv';
dotenv.config();

// SDK de Mercado Pago
import mercadopago from 'mercadopago';
// AGREGAR CREDENCIAL DE DEVPROGRAM
mercadopago.configure({  
  access_token: process.env.MERCADOPAGO_ACCESS_TOKEN,
});
