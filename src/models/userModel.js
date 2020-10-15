var mongoose = require('mongoose')
var UserModel = {
    getModel() {
        //Esquema principal de COLLECTION product 
        var schema = mongoose.Schema({
                // _id: mongoose.Schema.Types.ObjectId,
                name: String,
                surname: String,
                email: String,
                password:String,
                type:String
            }, {
                collection: 'user',
                versionKey: false   //Evitar que versione nuestras inserciones
             
            }

        )
        //Retornado del modelo productos ---> Collection product
        return mongoose.model('user', schema)

    }

}

module.exports = UserModel