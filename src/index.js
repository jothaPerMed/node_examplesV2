import http from 'http'
import { compile } from 'morgan';



const host = 'localhost';
const port = '8000';
const server = http.createServer((request,response)=>{

  

    /**Metodo para enviar Las Cabeceras  */
    response.setHeader('Content-Type','application/json')
   
    if(request.method==='GET'){
        response.statusCode=300
         
        response.write("<h1>Este Metodo esta permitido</h1>")
        response.end();
    }
    else{
        //Ejemplo de codigo de estado
        response.statusCode=404
        response.write("Este Metdo no esta permitido")
    }
    
   return response.end();
})

server.listen(port,server,err=>{
    if(err){
        return console.log(err)
    }
    console.log('Servidor Abierto en la ruta http://'+host+':'+port)
})