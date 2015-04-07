var http=require('http');


http.createServer(function(req,resp) {
    resp.writeHead(200, {"Content-Type": "text/html"});
    resp.write('<html></html><head><title>Single Digit Addition</title></head><body>')
    for(var j=0; j<20; j++) {
        var q = singleDigitPlus();
        resp.write(q+'<br/>');
    }
    resp.end('</body>');
}).listen(9000);



function singleDigitPlus() {
    var a = Math.floor((Math.random() * 10) );
    var b = Math.floor((Math.random() * 10) );
    return ''+a+'+'+b+'=';
}
