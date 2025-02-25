//Step 1 : import express module 
const express = require('express');
// require('express') loads the Express framework into the variable express.

//Step 2 : Initialize Express application.
const app = express();
// app is now an instance of the Express framework that we can use to define routes and handle requests.

//Step 3 : 
app.get("/",(req,res) => {
    res.send("Hello world")
})
// This defines a GET route for the root URL ("/").
//req (request) and res (response) are parameters that represent:
//req: Incoming request data from the client.
//res: The response object used to send data back to the client.
//res.send("Hello world") sends the response "Hello world" to the browser.

// Step 4 :
app.listen(5000);
// This starts the Express server and makes it listen for incoming connections on port 5000.