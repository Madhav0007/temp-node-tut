const http=require("http");

const server=http.createServer((req,res)=>{
// res.writeHead('200 OK')
// res.end(); 
if(req.url=='/')
{
res.end("welcome to home page")
return;
}
if(req.url==='/about')
{
    res.end("this is an about us page")
    return;
}
res.end("<h1>Oops! Page NOT FOUND</h1>");
return;
})
server.listen(5000)