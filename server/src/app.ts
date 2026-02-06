
import express, { Request, Response } from 'express'
import { DATABASE_URL } from './configs/env.config'

const app = express()
app.use(express.json())

app.get("/", (req:Request, res:Response) => {
    return res.status(200).json("Server is up")
})


export default app
