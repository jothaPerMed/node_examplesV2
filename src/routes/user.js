import express from 'express'
import {
    auth
} from '../middleware'
import db, {
    connString,
    dbconnetioninfo
} from '../sqlconection'
var mysql = require('mysql')
//Creacion de la connexion
const con = mysql.createConnection(connString)
const router = express.Router()
router
    .get('/', (req, res, next) => {

        //Conectar
        con.connect(function(err) {
        if(err){
            console.log({err})
        }
            console.log("Connected!");
           
          });
         

        res
            .status(200)
            .json({
                name: 'Jose Gabriel',
                lastname: 'Perea Medina'

            })

    })

    .put('/', auth, (req, res, next) => {

        res
            .status(201)
            .json(req.body)

    })

export default router