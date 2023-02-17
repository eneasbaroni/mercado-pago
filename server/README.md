# D'art - E-commerce - Backend
## Autor : Eneas Baroni

## Descripción

D'art es un e-commerce con pasarela de pago de Mercado Pago.
Sitio web de venta de ceramica artesanal.
Cuenta con seccion de Home, Productos, Carrito, Checkout, About.
Por cuestiones de uso practico, la base de datos de los productos se encuentra en un archivo JSON. Y no se utiliza bade de datos para usuario/cliente.

## Instalación

1. Clonar el repositorio
2. Ejecutar
```
npm install
```
Para instalar las dependencias de Node
4. Crear un archivo .env con las siguientes variables de entorno
```
MERCADOPAGO_ACCESS_TOKEN = ***
DESARROLLO_VENDEDOR_MERCADOPAGO_ACCESS_TOKEN =***

EMAIL= Aca va el email del dueño del sitio
MAILPASS= Se obtiene de Gmail
```
5. Ejecutar
```
npm start
```
Para levantar el servidor

## Uso
Para poder utilizar la pasarela de pago de forma local, es necesario crear un puente de red con ngrok.
Una vez instalado ngrok, y ejecutado, el mismo nos devolvera una url. Esta url se debe agregar eel archivo checkout.js en la carpeta client/src/services/checkout.js, en notificacionUrl.
En caso de utilizar la aplicacion en produccion, se debe agregar la url del sitio web. 

## Tecnologías utilizadas
- Node
- Express
- Nodemailer
- Axios

## Contribuciones
Pull requests son bienvenidos. Para cambios importantes, por favor abra un issue primero para discutir qué le gustaría cambiar.
