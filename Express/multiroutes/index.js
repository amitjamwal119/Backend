const http = require('http');
const fs = require('fs');

myServer = http.createServer((req,resp) => {
    const logdata = `New Request received from ${req.url} at ${Date.now()} time\n`
    fs.appendFile("logfile.txt", logdata , (err,data) =>{
       
        switch (req.url) {
            case "/":
                resp.end("Welcome to Homepage")
                break;
            case "/about":
                resp.end("Welcome to Aboutpage")
                break;
        
            default:
                resp.end("404 Not Found check your request")
                break;
        }
    })
})

myServer.listen(5004 , () => console.log("You started server"));