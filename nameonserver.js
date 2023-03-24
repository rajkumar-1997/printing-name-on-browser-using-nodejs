const http=require("http");



const server=http.createServer((req,res)=>{
    res.writeHead(200,"content-type","text/html");
    res.end("Rajkumar");
})

server.listen(4000,()=>{
    console.log("listening on port 4000");
})

