var http=require('http')

var server=http.createServer(function(req,res){
    res.writeHead(200,{'contentType':"text/html"})
    res.end("<h1>This is the biggest heading tag.</h1><p>Unordered List</p><ul><li>Delhi</li><li>Jaipur</li><li>Kanpur</li><li>Mumbai</li></ul><p>Ordered List</p><ol><li>Delhi</li><li>Jaipur</li><li>Kanpur</li><li>Mumbai</li></ol>")
})

server.listen(8080)