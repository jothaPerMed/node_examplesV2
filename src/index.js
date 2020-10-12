import http from 'http'
import { compile } from 'morgan';



const host = 'localhost';
const port = '8000';
const server = http.createServer((request,response)=>{
    response.write("<h1>Prueba Funcionando</h1>")
    response.end();
})

server.listen(port,server,err=>{
    if(err){
        return console.log(err)
    }
    console.log('Servidor Abierto en la ruta http://'+host+':'+port)
})