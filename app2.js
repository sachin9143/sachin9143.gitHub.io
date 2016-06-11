var http=require('http')

var server=http.createServer(function(req,res){
    res.writeHead(200,{'contentType':"text/html"})
    res.end("<h1>Introduction</h1>"+"<br>"+"<h4>SACHIN KUMAR</h4>"+"<br>"+"<h4>(Dept. of MCA) in NIET College</h4>")
})

server.listen(8080)