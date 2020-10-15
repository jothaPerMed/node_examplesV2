import express from 'express'
import {
    auth
} from '../middleware'

/**
 * CONEXION A MONGODB
 */
const connexion = require('../mongodb')
connexion.connect()
/**
 * MODELO BDD PRODUCT
 */
const model = require('../models/productModel')
var product = model.getModel()

const router = express.Router()
router
    .get('/', (req, res, next) => {
        // console.log(conn)

        
        
        product.find().exec(function (err, products) {
            if (err) throw err;
            res
            .status(200)
            .json(products)
        })
        

      

    })

    .post('/', (req, res, next) => {
        var nuevo =   product(req.body)
        nuevo.save(function(err){
            if(err)throw err;
            console.log("insertado")
            res
            .status(201)
            .json({'Inserted':'Ok'})
        })
      

    })

export default router