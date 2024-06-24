const mongoose=require('mongoose');
const querySchema=new mongoose.Schema({
    originalURL:{
        type:String,
        min:[5,'minimum length is 5 characters'],
        required:[true,'Original URL is required'],
        unique:[true,'Shortcut for this URL already exists']
    },
    shortURL:{
        type:String,
        min:[5,'minimum length is 5 characters'],
        required:[true,'Short URL keyword is required'],
        unique:[true,'This shortcut already exists']
    }
})

 module.exports=new mongoose.model('QueryModel',querySchema);
