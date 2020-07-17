const path = require("path");

const express = require("express");
const app  = express();
const bodyParser = require("body-parser");

const {router} = require("./routes/appRoutes")

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, "public")));

app.use(router);

app.use("/",(req,res,next)=>{
    res.send("<h1> 404 | Oops! You have lost your Way...")
})

app.listen(3000, "localhost", ()=> {
    console.log("Sever started at port 3000");
});