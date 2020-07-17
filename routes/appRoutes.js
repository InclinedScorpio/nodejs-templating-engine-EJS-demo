const { response } = require("express");
const express = require("express");
const router = express.Router();

let users=[];

router.get("/",(req,res,next)=> {
    res.render("user-form");
});

router.post("/add-user",(req,res,next)=> {
    let username = req.body.username;
    users.push({username:username});
    res.redirect("/users");
});

router.get("/users", (req,res,next)=> {
    res.render("users", {users:users});
});

exports.router = router;
