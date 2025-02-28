const express = require("express");
const users = require("./MOCK_DATA.json")

const app = express();
const PORT = 3025;

// Get methods start -----------------------------------------------------------------------------------------------------------------------------------
//Routes : localhost:3025/users
app.get('/users', (req,res) => {
    const html = `
    <ul> ${users.map((user) => `<li>${user.first_name}</li>`).join('')} </ul>
    `;
    res.send(html);     //In this we want to send response in format of html not json this is server side rendered page
})

//Dynamic path parameters for this use /:field (e.g /:id , /:email) here id is variable and is dynamic
app.get("/api/users/:id", (req, res) => {
    const id =  Number(req.params.id);          //id is variable to get id Number is used to convert it to number format from string
    const user = users.find((user) => user.id === id);  //Now we have to find that user which matches id you have defined from json  
    return res.json(user);      //Now we have to return response in the form of json
})
//Routes : localhost:3025/api/users - for simple react , native , alexa app etc
app.get('/api/users', (req , res) => {              //return full json format array collection of objects
    return res.json(users);
})
//Get Method end-----------------------------------------------------------------------------------------------------------------------------------

//patch delete , post requests using single route
app.route("/api/users/:id")
.patch((req , res)=> {
    return res.json({ status : "pending" });
})
.delete((req , res)=> {
    return res.json({ status : "pending" });
})


app.post("/api/users", (req ,res) => {
    return res.json({ status : "pending" });

})






app.listen(PORT , () => console.log(`Server started on ${PORT}`))

