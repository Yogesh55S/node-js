const fs = require("fs");

fs.writeFile("./data.txt","hello friday",(err,res)=>{
  if(err){
    console.log("error occurs",err);
  }else{
    console.log("succesfully completed");
  }
});