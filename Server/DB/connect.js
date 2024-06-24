const mongoose=require('mongoose');
mongoose.connect(`mongodb://localhost:27017/urlshortner`,
    process.env.MONGO_URL,
    {
        useNewUrlParser:true,
        useUnifiedTopology:true
    
    }).then(()=>{
        console.log("Connected to db");
    }).catch((e)=>{
        console.log(`error is `+e);
    });