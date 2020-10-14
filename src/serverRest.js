import express from 'express'
import config from './config'
import router from './routerApi'


let _server
const server = {
    start() {
        const app = express()
        config(app)
      

        //============Rutas
        router(app)
    
        //========End Rutas


        _server = app.listen('9000', () => {
            if (process.env.NODE_ENV !== 'test') {
                console.log("SERVER API IS RUN--->>>")

            }

        })

    },
    close() {
        _server.close()
    }
}
export default server
if (!module.parent) {
    server.start()
}