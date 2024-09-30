//Import statements
import mongoose from 'mongoose'

//Connection with database
export const connectDb=async()=>{
        try{
            const connect = await mongoose.connect(`${process.env.MONGO_URL}`)
            console.log(`Successfully connected with database ${connect.connection.name} ${connect.connection.host}`.bgMagenta.white)
        }
        catch(error){
            console.error(`Error while connecting with database ${error}`.bgRed.white)
        }
} 