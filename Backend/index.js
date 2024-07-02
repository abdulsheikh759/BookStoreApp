import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import cors  from 'cors';

import bookRoute from './routes/book.route.js'
import userRoute from './routes/user.route.js'

dotenv.config()

const app = express();
app.use(cors());
app.use(express.json())


const port = process.env.PORT || 5000;
const MongoUrl = process.env.MONGODB_URL;



 //Connect the Database Connectivity

  try {
    mongoose.connect(MongoUrl)
    console.log('Connect to the Mongodb Database');
  } catch (error) {
    console.log(`Not Connecting to Mongodb Database ${error}`);
  }


  //Define the Route

  app.use("/book",bookRoute)
  app.use("/user",userRoute)

app.listen(port,()=>{
    console.log(`Server is listening on ${port}`);
});