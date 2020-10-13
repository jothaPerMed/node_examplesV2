import home from './routes/home.js'
import user from './routes/user.js'
export default app=>{
    app.use('/',home)
    app.use('/',user)
}