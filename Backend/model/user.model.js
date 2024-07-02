import mongoose  from "mongoose";

// const userSchma =  mongoose.Schema({
//     name:{
//         tyep:String,
//         // required:true
//         required:true,
//     },

//     email:{
//         tyep:String,
//         required:true,
//         // unique:true
//     },

//     password:{
//         tyep:String,
//         required:true,
//     }
// })

const userSchema = mongoose.Schema({
    name:String, 
    email:String, 
    password:String,
    // confirmPass:String,required:true,
    // mobile:Number,required:true,
    // confPass:String,required:true,
})
const user = mongoose.model('user',userSchema)

export default user