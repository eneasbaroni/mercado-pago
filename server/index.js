//npm i express 
//npm i cors
//npm i mercadopago
//npm i nodemailer
//npm install nodemon -g

import express from 'express';
import cors from 'cors'; 
import mercadopago from 'mercadopago';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.set('port', process.env.PORT || 8080);
const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

//recibir los body
import bodyParser from 'body-parser';
app.use(bodyParser.json());

//Router
import {router} from './routes/index.js';
app.use("/", router);


app.listen(app.get('port'), () => {
  console.log('Server on port', app.get('port'));
});




