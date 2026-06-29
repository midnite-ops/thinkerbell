import express from 'express'
import noteRoutes from './routes/noteRoutes.js'
import dotenv from 'dotenv'
import { connectDb } from './config/db.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT

connectDb()
app.use(express.json())
app.use("/api",noteRoutes)



app.listen(PORT, () => {
    console.log("port is running on 8000")
})  

console.log("After app.listen");