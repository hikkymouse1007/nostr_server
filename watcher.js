import http from 'http'
import httpStatus from 'http-status-codes'
import fs from 'fs'

const port = 3000;

const routeMap = {
    "/watcher": "watcher.html"
};

const server = http.createServer((request, response) => {
    response.writeHead(httpStatus.StatusCodes.OK, {
        "Content-Type": "text/html"
      });

    if (routeMap[request.url]) {
        fs.readFile(routeMap[request.url], (error, data) => {
            response.write(data);
            response.end();
        })
    } else {
        response.end("<h1>Sorry, page not found</h1>");
    }
})

server.listen(port);
console.log(`The server is listening on port: ${port}`);
