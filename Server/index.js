const express=require('express');
const app=express();
const user_Route=require('./Routes/UserRoute');
const query_Route=require('./Routes/QueryRoute');
require('./DB/connect');
app.use('/',user_Route);
app.use('/user/query/',query_Route);



const port=8000 || process.env.PORT
app.listen(port,()=>{
    console.log(`server running succesfully on port ${port}`);
})