/**
 * Vamos a crear un servidor en un puerto y a partir de hay vamos a generar la ruta raiz
 * Desde hay vamos a renderizar nuestro servidor.
 */
//En 1º lugar importar dependencia de express.
import express, {
    response
} from 'express'
//Importar Morgan como logger ->> Servirá como middleware en las peticiones GET\POST\PUT...
import morgan from 'morgan'
//INSTALAR DEPENDENCIA BODYPARSER --> npm install --save body-parser
import bodyParser from 'body-parser';
//En 2º lugar cargar una instancia dentro de una veriable en este caso una CONSTANTE.
const app = express()
app.disable('x-powered-by') //Deshabilitar cabecera que hace referencia a express en la respuesta.
app.set('env', 'development') //Entorno en el que estamos ejecutando el servidor.
app.use(morgan('common')) //Utilizar Morgan
app.use(bodyParser.json())//Utilizar como middleware para devolver en en request sobr5e todo las POST
app.use(bodyParser.urlencoded({extended: false}))

//En 3º lugar generar las rutas
app.get('/', (request, response) => {
    response.end("Hola Mundo!")
})


//En 4º lugar vamos a decirle a express que escuche en el puerto 9000 .
app.listen('9000', () => {
    console.log("Servidor Run.. PORT=>9000")
})