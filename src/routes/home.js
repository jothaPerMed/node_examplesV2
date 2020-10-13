

import express from 'express'
const router = express.Router()

router.get('/', (request, response) => {
    response.end("Hola Mundo!")
    response.end()
})

export default router