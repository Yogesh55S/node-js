const express = require ("express");
const users = require("./MOCK_DATA.json");
const app = express();
app.get("/api/users",(req,res)=>{
  return res.json(users);
});

app.listen(8001, ()=> console.log("server started"));