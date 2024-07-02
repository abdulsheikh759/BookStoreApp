import user from '../model/user.model.js'
import bcrypt from 'bcryptjs'

export const signup = async (req,res) =>{
    try {
        const {name,email,password}=req.body;
        const User = await user.findOne({email})
        if(User){
            return res.status(400).json({msg:"User already exists"})
        }
   
        const hashPassword = await bcrypt.hash(password,10)
        const createdUser = new user({
           name:name,
           email:email,
           password:hashPassword,
        })
      await createdUser.save()
       
        res.status(200).json({msg:"User created Successfully",user:{
            name:createdUser.name,
            email:createdUser.email,
            _id:createdUser._id,
        }})
       
      
    } catch (error) {
        console.log("Error creating user",error.message);
        res.status(500).json({msg:" Internal Server Error"})
    }
};



export const login = async (req,res) =>{
    try {
        const {email,password} = req.body;
        const User = await user.findOne({email})
        const isMatch = await bcrypt.compare(password,User.password);
        if(!User || !isMatch){
           return res.status(400).json({msg:"Invalid username and Password"});
        }
        else{
            res.status(200).json({msg:"Login Successfully",User:{
                name:User.name,
                email:User.email,
                _id:User._id,
            }})
        }
    } catch (error) {
      console.log("Error: " + error.message);
      res.status(500).json({ msg: "Internal Server Error" });
    }
}


