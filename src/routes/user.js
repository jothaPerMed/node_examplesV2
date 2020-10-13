import express from 'express'
const router = express.Router()

router.get('/:user', (request, response) => {
    response.render('user', {
        title: 'Mi Web',
        mensaje: `Bienvenido ${request.params.user}`
    })
    response.end()
})

export default router