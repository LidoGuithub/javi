const http = require("http");
const fs = require("fs");
const port = 3000;

const server = http.createServer(function(req, res){
    res.writeHead(200, {"Content-Type": "text/html"});
    fs.readFile("index.html", function(error, data){
        if(error){
            rea.writeHead(404);
            res.write("Error: File not found");
        }else{
            res.write(data);
        }
        res.end();
    })
    fs.readFile("style.css", function(error, data){
        if(error){
            rea.writeHead(404);
            res.write("Error: File not found");
        }else{
            res.write(data);
        }
        res.end();
    })
    fs.readFile("index.js", function(error, data){
        if(error){
            rea.writeHead(404);
            res.write("Error: File not found");
        }else{
            res.write(data);
        }
        res.end();
    })

    //res.write("Hello node");
})

server.listen(port, function(error){
    if (error){
        console.log("Error", error);
    }else{
        console.log("server is listening on port: " + port);
    }
})