/**
 * Created by student on 6/11/2016.
 */
var http=require('http');
var url=require('url');


var server=http.createServer(function(req,res){
    console.log(page);
    res.writeHead(200,{"contentType":"text/html"});
    res.end("Hello server");
});
server.on('close',function(){
    console.log("server closed");
})

server.listen(8080);
server.close();