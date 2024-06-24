const queryModel = require("../Model/QueryModel");

const getHome=(req,res)=>{
    console.log("HOME PAGE FROM QUERY ROUTE");
    res.send('HOME PAGE FROM QUERY ROUTE');
}
const createShortcut=async(req,res)=>{
    try{
        const query=queryModel({
            originalURL:req.body.originalURL,
            shortURL:req.body.shortURL
        })
        const data=await query.save();
        if(data){
            console.log(data);
            res.send(data);
        }
        else {
            res.send("Error in the create user method");
          }
        } catch (err) {
          console.log(err.message);
          res.send(err.message);
        }
}
module.exports={getHome,
    createShortcut
};