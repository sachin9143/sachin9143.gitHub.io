/**
 * Created by student on 6/10/2016.
 */
var http=require('http')
var url=require('url');

var server=http.createServer(function(req,res){
    var page=url.parse(req.url).query;
    console.log(page);
    res.writeHead(200,{"contentType":"text/html"});
    res.write("Welcome ! "+page);

res.end()
});

server.listen(8080);