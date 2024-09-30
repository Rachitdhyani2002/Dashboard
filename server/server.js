//Import Statement
import express from 'express'
import cors from 'cors'
import 'colors'
import {connectDb} from './database/configuration/config.js'
import dataRoute from './routes/dataRoute.js'
import dotenv from 'dotenv'

//Dotenv configuration
dotenv.config()

//Express Object
const app  =  express()

//Middlewares
app.use(cors())

//Connection with database
connectDb()

//Routes
app.use('/api/v1/data',dataRoute)

//Port
const PORT = process.env.PORT || 8080

//Listen Port
app.listen(PORT,()=>{
    console.log(`Server is running successfully at Port ${PORT}`.bgCyan.white)
})