const http = require("http");
const fs = require("fs");
const server = http.createServer((req,res) =>{
  const log = (`request received: \n ${Date.now()} ${req.url} \n `);
 
  fs.appendFile('data.txt',log,(err,data) =>{
    res.end("Data will be moved into data file ->");
  });
});

server.listen(8005,() =>{
  console.log("Server is listening on port 8005");
})

