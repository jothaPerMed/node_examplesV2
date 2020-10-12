import http from 'http'
//Importamos la clase FileStream con -> fs
import fs from'fs';



const host = 'localhost'
const port = '8000'
//Ruta del fichero
const file = './src/index.html'
const server = http.createServer((request, response) => {
/**
 * Mediante HTML
 */
    // response.writeHead(200, {
    //     'Content-Type': 'text/html; charset=UTF-8'
    // })
    // //Para Leer el fichero Html 
    // fs.readFile(file, (err, content) => {
    //     if (err){
    //         return console.log(err)
    //     }
    //     response.write(content)
    //     return response.end();  
    // })
    //=======================================End HTML
    /**
     * MedianteJSON
     */
    response.writeHead(200, {
        'Content-Type': 'application/json'
    })

  
        response.write(JSON.stringify({'key':'Value'}))
        return response.end();  
    




    
})

server.listen(port, server, err => {
    if (err) {
        return console.log(err)
    }
    console.log('Servidor Abierto en la ruta http://' + host + ':' + port)
})