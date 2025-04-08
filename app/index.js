const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Hello from Jenkins + Docker Node App 👋");
});

server.listen(3001, () => {
  console.log("Server is running on port 3000");
});

