const path= require("path");
const express = require("express");
const app= express();

const staticPath = path.join(__dirname,"../public");

//to set the view engine
app.set('view engine', 'hbs');

//built in middleware
//app.use(express.static(staticPath));

//template engine
app.get("", (req, res)=>{
res.render('index.hbs');
});
app.get("/", (req, res)=> {
    res.send("Hello from the Express");
});
app.get("/about", (req, res) =>{
    res.send("hello from about page");
})
app.listen(8000, ()=>{
    console.log("Listening from port 8000");
});
