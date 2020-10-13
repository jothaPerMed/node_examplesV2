//npm i --save body-parser
import bodyParser from 'body-parser'
//npm i --save morgan
import logger from 'morgan'
// npm i --save cors
import cors from 'cors'

export default app => {
    app.disabled('x-powered-by')
    app.set('env',process.env.NODE_ENV)

    if(process.env.NODE_ENV!== 'test'){
        app.use(logger('combined'))
    }

    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended:false}))
    app.use(cors())

}