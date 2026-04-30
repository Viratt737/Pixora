import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectTODb from './config/db.js'
const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.json())
app.use(cors())
connectTODb()
app.get('/' ,(req, res) =>{
    res.json({
        "msg" : "API is Working"
    })
})

app.listen(PORT, ()=>{
    console.log(`server runnig on PORT ${PORT}`);
})