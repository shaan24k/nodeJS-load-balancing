var http = require('http');

function startServer(host, port) {  
  http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Nice to meet you at ' + host + ':' + port);
  }).listen(port, host);

  console.log('Warming up your server at ' + host + ':' + port);
}

startServer('localhost', 3001);  
startServer('localhost', 3002);  
startServer('localhost', 3003); 