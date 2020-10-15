import user from './routes/user'
import products from './routes/products'
export default app=>{
   
    app.use('/product',products)
    app.use('/user',user)
   
}