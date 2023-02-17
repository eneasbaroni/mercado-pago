# D'art - E-commerce
## Autor : Eneas Baroni

## Descripción

D'art es un e-commerce con pasarela de pago de Mercado Pago.
Sitio web de venta de ceramica artesanal.
Cuenta con seccion de Home, Productos, Carrito, Checkout, About.
Por cuestiones de uso practico, la base de datos de los productos se encuentra en un archivo JSON. Y no se utiliza bade de datos para usuario/cliente.

## Instalación

1. Clonar el repositorio
2. En la carpeta client ejecutar
```
npm install
```
Para instalar las dependencias de React
3. En la carpeta server ejecutar
```
npm install
```
Para instalar las dependencias de Node
4. Crear un archivo .env en la carpeta server con las siguientes variables de entorno
```
MERCADOPAGO_ACCESS_TOKEN = ***
DESARROLLO_VENDEDOR_MERCADOPAGO_ACCESS_TOKEN =***

EMAIL= Aca va el email del dueño del sitio
MAILPASS= Se obtiene de Gmail
```
5. En la carpeta server ejecutar
```
npm start
```
Para levantar el servidor
6. En la carpeta client ejecutar
```
npm start
```
Para levantar el cliente
7. Abrir el navegador en la dirección http://localhost:3000/

## Uso
Para poder utilizar la pasarela de pago de forma local, es necesario crear un puente de red con ngrok.
Una vez instalado ngrok, y ejecutado, el mismo nos devolvera una url. Esta url se debe agregar eel archivo checkout.js en la carpeta client/src/services/checkout.js, en notificacionUrl.
En caso de utilizar la aplicacion en produccion, se debe agregar la url del sitio web. Tanto en el archivo checkout.js como en el archivo checkout.js de client para especificar a que url se hace la petición con axios.

## Tecnologías utilizadas
- React
- React Router
- Node
- Express
- Nodemailer
- Axios

## Contribuciones
Pull requests son bienvenidos. Para cambios importantes, por favor abra un issue primero para discutir qué le gustaría cambiar.
