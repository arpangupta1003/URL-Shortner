const mongoose=require('mongoose');
const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name is mandatory"],
        minlength:[4,"Minimum 4 letters first name"]
    },
    
    email:{
        type:String,
        required:[true,"Email is mandatory"],
        unique:[true,"User already exists"]
    },
    pno:{
        type:String,
        required:[true,"Phone Number is mandatory"],
        unique:[true,"User already exists"],
        minlength:[10,"Invalid Phone Number"]
    },
    password:{
        type:String,
        required:[true,"Password is required"],
        minlength:[6,"Minimum 6 characters long"]
    },
});


const userModel=new mongoose.model("UserManagementSystem_Model",userSchema);
module.exports=userModel;