import express from 'express'

import morgan from 'morgan'

import bodyParser from 'body-parser';
import path from 'path';

const app = express()
/**MIDDLEWARES */
app.disable('x-powered-by')
app.set('env', 'development')
app.use(morgan('common'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: false
}))
/**END MIDDLEWARES */

app.get('/', (request, response) => {
    response.end("Hola Mundo!")
})
/**Hacer uso del directorio de vistas para el renderizado */
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug');
//=====Utilizar Rutas Prametrizables 
/*
app.get('/:user', (request, response) => {
    response.render('user', {
        title: 'Mi Web',
        mensaje: `Bienvenido ${request.params.user}`
    })
    response.end()
})
*/



//Utilizacion de middleware para buscar la pagina si no existiera mostraria un 404
app.use((require,response,next)=>{
    response.render('404',{
        title: 'Error Pagina No Existe',
        mensaje : `La ruta que busca da a una pagina no existente `
    })
})
/**
 * Utilizar Ficheros estaticos parar leerlos segun su extension e importarlos
 */
app.use('/static', express.static(path.join(__dirname, 'public')))

//En 4º lugar vamos a decirle a express que escuche en el puerto 9000 .
app.listen('9000', () => {
    console.log("Servidor Run.. PORT=>9000")
})