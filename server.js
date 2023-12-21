const http = require("node:http"); //nodejs

const hostname = "localhost"; //local host
const port = 3001;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("NodeJS\n ");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
