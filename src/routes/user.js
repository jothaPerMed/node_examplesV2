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
const model = require('../models/userModel')
var user = model.getModel()

const router = express.Router()
router
    .get('/', (req, res, next) => {
        // console.log(conn)

        
        
        user.find().exec(function (err, users) {
            if (err) throw err;
            res
            .status(200)
            .json(users)
        })
        

      

    })

    .post('/', (req, res, next) => {
        var nuevo =   user(req.body)
        nuevo.save(function(err){
            if(err)throw err;
            console.log("insertado")
            res
            .status(201)
            .json({'Inserted':'Ok'})
        })
      

    })

export default router