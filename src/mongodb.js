var mongoose = require('mongoose');

const connection = {
    connect() {
        
       return mongoose.connect(process.env.MONGOAUTH, {
        useNewUrlParser: true
    }, function (err) {

            if (err) throw err;

            console.log('Successfully connected');

        })

    }
}
module.exports = connection