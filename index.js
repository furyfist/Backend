const http = require("http");
const fs = require("fs");

const myserver = http.createServer((req,res) => {
    const log = `${Date.now()} : New request received \n ${req.url}`
    if(req.url = "/favicon.ico"){
        res.writeHead(204)
    }
    switch(req.url){
        case "/" : 
            res.end("HomePage");
            break;
        case "/about" :
            res.end("This is the furyfist")
            break;
    }
    fs.appendFile("log.txt", log, (err,data) => {
        res.end("hello from server again");
    }) 
});

myserver.listen(8000, () => console.log("dn"));