
import auth from './routes/auth'
import user from './routes/user'

export default app => {
    app.use('/auth', auth)
    app.use('/user', user)

}