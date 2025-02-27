const http = require('http');
const fs = require('fs');
const url = require('url');

myServer = http.createServer((req,resp) => {
    if (req.url === "/favicon.ico") return resp.end();                        //to exclude default favicon 
    const logdata = `New Request received from ${req.url} at ${Date.now()} time\n`
    
    const myUrl = url.parse(req.url, true); //it will parse query string parameters in below defined console.log(myUrl) it will make query objects e.g  query: [Object: null prototype] { myname: 'abhi,userid=1' },
    console.log(myUrl);         //Url { protocol: null,slashes: null,auth: null,host: null,port: null,hostname: null,hash: null, search: '?myname=abhi',  query: [Object: null prototype] { myname: 'abhi,userid=1' },,pathname: '/contacts',path: '/contacts?myname=abhi',href: '/contacts?myname=abhi' path: '/contacts?myname=abhi,userid=1', href: '/contacts?myname=abhi,userid=1'}
    

    fs.appendFile("logfile.txt", logdata , (err,data) =>{
       
        switch (myUrl.pathname) {       //Using this we can work on query parameter - pathname if it does'nt exist
            case "/":
                resp.end("Welcome to Homepage")
                break;

            case "/about":
                const username = myUrl.query.myname
                resp.end(`Hi, ${username}`)             // search query = http://localhost:5005/about?myname=abhi  // output : hi , abhi
                resp.end("Welcome to Aboutpage")
                break;

            case "/contacts":
                resp.end("Welcome to Contacts page")
                break;

            case "/search":
                const search = myUrl.query.search_query;
                resp.end("Here are your results for" + search)  //search in url http://localhost:5005/search?search_query=javascript+tic+tac+toe
                break;
        
            default:
                resp.end("404 Not Found check your request")
                break;
        }
    })
})

myServer.listen(5005 , () => console.log("You started server"));