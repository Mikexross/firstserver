const http = require('http');

const PORT1 = 7500;
const PORT2 = 7000;

function handleRequest1(request, response){
    response.end("Bet you're sweet ass im a server!!" + request.url);
}
function handleRequest2(request, response){
    response.end("Im a very bad server :(!" + request.url);
}

const server1 = http.createServer(handleRequest1);
const server2 = http.createServer(handleRequest2);

server1.listen(PORT1, function(){
    console.log("server listening on: http://localhost:%s", PORT1);
});
server2.listen(PORT2, function(){
    console.log("server listening on: http://localhost:%s", PORT2);
});
