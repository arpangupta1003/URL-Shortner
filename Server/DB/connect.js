const mongoose=require('mongoose');
const config=require('../config');
mongoose.connect(`mongodb+srv://arpangupta1003:${config.password}@urlshortnercluster.5a4u7dm.mongodb.net/?retryWrites=true&w=majority&appName=URLShortnerCluster`,
    process.env.MONGO_URL,
    {
        useNewUrlParser:true,
        useUnifiedTopology:true
    
    }).then(()=>{
        console.log("Connected to db");
    }).catch((e)=>{
        console.log(`error is `+e);
    });