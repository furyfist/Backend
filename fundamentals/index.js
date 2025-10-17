const express = require("express");

const app = express()

app.get("/", (req,res) => {
    console.log("hii this is home page");
    return res.send ("hii this is home page");
})

app.get("/about", (req,res) => {
    console.log("hii this is about page");
    return res.send ("hii this is about page");
})

app.listen(8000)
