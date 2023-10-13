import UserModel from "../Models/userModel";
import bcrypt from 'bcrypt'

export const registerUser =async(req,res)=>{
    const {username,password,firstname,lastname}=req.body;
    const salt = await bcrypt.genSalt(10)
    const hashedPass = await bcrypt.hash(password,salt)

    const newUser =new UserModel({username,hashedPass,firstname,lastname})


    try{

        await newUser.save()
        res.status(200).json(newUser)
    }catch(error){
            res.status(500).json({message:error.message});
    }
};

export const loginUser =async (req,res)=>{

    

    try{
        const user= await UserModel.findOne({username:userame})

        if(user)
        {
            const validity = await bcrypt.compare(password,user.password)

            validity? res.status(200).json(user):res.status(400).j("Wrong Password")
        }
        else{
            res.status(404).json("user does not exists")
        }
    }catch(error){
        res.status(500).json({message:error.message});

    }
}