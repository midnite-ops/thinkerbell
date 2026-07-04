import express from 'express'
import noteRoutes from './routes/noteRoutes.js'
import dotenv from 'dotenv'
import { connectDb } from './config/db.js'
import cors from 'cors'
import path from 'path'

dotenv.config()

const app = express()
app.use(cors({
    origin: 'http://localhost:5173',
}))
const PORT = process.env.PORT
const __dirname = path.resolve()



app.use(express.json())

app.use("/api",noteRoutes)

if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname, "../frontend/dist")))
    app.use((req, res) => {
        res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
    });
}


connectDb().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`)
    })  
})
