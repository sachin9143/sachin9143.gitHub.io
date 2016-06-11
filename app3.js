/**
 * Created by student on 6/10/2016.
 */
var http=require('http')



var server=http.createServer(function(req,res){
    var name="Sachin Kumar"
    var dept="MCA"
    var year="Second year"

    res.writeHead(200,{"contentType":"text/html"})
    res.write("<div style='color:red;background-color:silver'><h1>Introduction</h1><span>Name:</span>"+name+"<br>"+"<span>Department:</span>"+dept+"<br>"+"<span>Year:</span>"+year+"</div>")
    res.end()
})

server.listen(8080)
