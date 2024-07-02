import mongoose from "mongoose";

const bookSchema =mongoose.Schema({
    name:String,
    price:Number,
    category:String,
    img:String,
    title:String,
})

const Book=mongoose.model("Book",bookSchema)

export default Book