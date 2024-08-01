const cors = require('cors')
const express = require('express')
const connection = require('./config/db')
const PORT = 8080
const userRouter = require("./routes/user.routes")
const productRouter = require("./routes/product.routes");
const cartRouter = require('./routes/cart.routes');
 
const app = express()
app.use(cors())
app.use(express.json());
app.use('/user',userRouter);
app.use("/product", productRouter);
app.use('/cart', cartRouter)

app.get('/',(req,res)=>{
    res.status(202).send('Health check done, app is running.')
})

app.listen(PORT, async()=>{
    try {
        await connection
        console.log(`app is running on port ${PORT} & DB is Connected.`)
    } catch (error) {
        console.log(error)
    }
})