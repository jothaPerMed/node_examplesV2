var mongoose = require('mongoose')
var productModel = {
    getModel() {
        //Esquema principal de COLLECTION product 
        var schema = mongoose.Schema({
                // _id: mongoose.Schema.Types.ObjectId,
                name: String,
                precio: Number,
                type: String
            }, {
                collection: 'product',
                versionKey: false   //Evitar que versione nuestras inserciones
             
            }

        )
        //Retornado del modelo productos ---> Collection product
        return mongoose.model('product', schema)

    }

}

module.exports = productModel