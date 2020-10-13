import express from 'express'
import {
    auth
} from '../middleware'
const router = express.Router()
router
    .get('/', (req, res, next) => {
        res
            .statusCode(200)
            .json({
                name: 'Jose Gabriel',
                lastname: 'Perea Medina'

            })

    })

    .put('/',auth, (req, res, next) => {

        res
            .status(201)
            .json(req.body)

    })

export default router