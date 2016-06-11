/**
 * Created by student on 6/10/2016.
 */
var http=require('http')



var server=http.createServer(function(req,res){

    res.writeHead(200,{"contentType":"text/html"})
    res.write("<!DOCTYPE html>"+
        "<html lang=en>"+
        "<head>"+
        "<meta charset=UTF-8>"+
        "<title>Title</title>"+
        "</head>"+
        "<body>"+
            "<center>"+
            "<form style="+"height:40px width=:50px >"+
                "<h1><label style="+"color:green>Login Form</label></h1>"+
                "<h3><label style="+"color:red >User Name&nbsp</label>"+
                "<input type=text name=uname></h3>"+
                "<h3><label style="+"color:red >Password&nbsp</label>"+
                "<input type=password name=upass></h3>"+"&nbsp&nbsp&nbsp"+
                "<button style="+"color:blue>Submit</button>"+"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"+
                "<button style="+"color:yellow>Cancel</button>"+
            "</form>"+
            "</center>"+
        "</body>"+
        "</html>")
    res.end()
})

server.listen(8080)
