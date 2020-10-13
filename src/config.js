//npm i --save body-parser
import bodyParser from 'body-parser'
//npm i --save morgan
import logger from 'morgan'
// npm i --save cors
import cors from 'cors'
//npm i --save dotenv
import {
    config
} from 'dotenv'

const SETTINGS = config()

//console.log(SETTINGS)
export default app => {
    app.disabled('x-powered-by')
    app.set('env', SETTINGS.parsed.env)
    app.set('config', SETTINGS.parsed)
    app.locals.config = app.get('config')
    //console.log('config',app.locals.config)

    


    if (process.env.NODE_ENV !== 'test') {
        app.use(logger('combined'))
    }

    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({
        extended: false
    }))
    app.use(cors())

}