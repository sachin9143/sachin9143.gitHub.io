/**
 * Created by student on 6/10/2016.
 */
var http=require('http');
var url=require('url');


var server=http.createServer(function(req,res){
    var page=url.parse(req.url).pathname;
    console.log(page);
    res.writeHead(200,{"contentType":"text/html"});
    if(page=="/login"){
        res.write("Welcome to login Page"+page);
    }
    else
        if(page=="/signup"){
            res.write("Welcome to SignUp Page"+page);
        }
    else{
            res.write("This is the Home Page"+page);
        }

    res.end()
});

server.listen(8080);
