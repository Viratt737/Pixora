import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectTODb from './config/db.js'
import userRouter from './routes/user.route.js'
import imageRouter from './routes/image.route.js'
const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.json())
app.use(cors())
connectTODb()
app.use('/api/user',userRouter)
app.use('/api/image',imageRouter)
app.get('/' ,(req, res) =>{
    res.json({
        "msg" : "API is Working"
    })
})

app.listen(PORT, ()=>{
    console.log(`server runnig on PORT ${PORT}`);
})