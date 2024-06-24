const express=require('express');
const cors = require('cors');

const app=express();

const user_Route=require('./Routes/UserRoute');
const query_Route=require('./Routes/QueryRoute');
require('./DB/connect');
app.use('/',user_Route);
app.use(cors());

app.use('/query/',query_Route);

// app.use('/keyword/')

const port=5000 || process.env.PORT
app.listen(port,()=>{
    console.log(`server running succesfully on port ${port}`);
})