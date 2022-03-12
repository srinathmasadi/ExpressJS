const express= require("express");
const app= express();
const port=3000;
app.get("/",(req, res)=>{
    res.send("<h1>Welcome to my home page<h1>");
});
app.get("/about",(req, res)=>{
    res.send("Welcome to my about page");
});
app.get("/contact",(req, res)=>{
    res.send("Welcome to my contact page");
});
app.get("/temp",(req, res)=>{
    res.json({
        id: 1,
        name:"srinath",
    });
});
app.listen(port, ()=>{
    console.log(`listening to the port no ${port}`);
});