const express = require("express")

const app = express();

app.get("/", (req, resp) => {
    return resp.send("Hello from Home Page");
});

app.get("/about" , (req,resp) => {
    return resp.send(`Hello ${req.query.name}`)
});

app.listen(3013, () => console.log("Server Started"))
