const fs = require("fs");

fs.readFile("./data.txt","utf-8",(err,res) =>{
  if(err){
    console.log("not completed",err);
  }else{
    console.log("completed");
  }
  console.log(res);
});
