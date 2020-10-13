//NECESARIO -> npm i --save jwt-simple
import jwt from 'jwt-simple'

export const auth = (req , res , next )=>{

    if(!req.headers.authorization){// Si no tiene cabecera de Authorization -> jwt jksajkdbajbdjabdjba 
        return res
        .status(401)// codigo no autorizado
        .send({
            message : 'No authorized'
        })
    }
                ///Ej: jwt jbkjdsbkjdABDHJBNDasaD31a5sd4dA6574D654
    const token = req.headers.authorization.split(' ')[1]
    const payload = jwt.decode(token,req.app.locals.config.TOKEN)

    req.user = payload.email
    next()
}