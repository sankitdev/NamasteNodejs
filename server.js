// Date: 27-8-24 ep-11 Done
const http = require("node:http");

const server = http.createServer(function (req, res) {
  if (req.url === "/getSeacretData") {
    res.end("You are fool");
  }
  res.end("Hello Word");
});

server.listen(3000);
