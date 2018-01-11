const http = require('http');
const fs = require('fs');
const server = http.createServer(function (request,responce) {
    console.log(request.method,request.url);
    if (request.url == '/stylemove.css'){
        const css = fs.readFileSync('stylemove.css','utf8');
        responce.end(css);
    } else if (request.url == '/scriptmove.js'){
        const script = fs.readFileSync('scriptmove.js','utf8');
        responce.end(script);
    }/* else if (request.url == '/favicon.ico'){
        const favicon = fs.readFileSync('favicon.ico');
        responce.end(favicon);
    }*/ else {
        const html = fs.readFileSync('indexmove.html','utf8');
        responce.end(html);
    }



    const html = fs.readFileSync('indexmove.html','utf8');
   responce.end(html);
});
        //console.log('port =',process.evn.PORT);
server.listen(process.evn.PORT);
console.log('Server started');