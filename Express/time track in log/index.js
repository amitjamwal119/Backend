const http = require('http');
const fs = require('fs');

myServer = http.createServer((req,resp) => {
    const logcontent = `${Date.now()}: ${req.url} New request received \n` ;       // date.now() is inbuilt function gives date ,//req.url checks which url is requesting e.g localhost:5003/Contact-us
    fs.appendFile("logfile.txt", logcontent , (err,data) => {       
        resp.end("Hello from server")                               //response to user in frontend
    });
});

myServer.listen(5003 , () => console.log("Server started"));        //port no. 5003 , server started in terminal