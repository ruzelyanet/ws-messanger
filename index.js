const dotenv = require('dotenv');
dotenv.config();

var PORT = process.env.PORT || 5000;
var express = require("express");
var app = express();

var http = require("http");
var server = http.Server(app);

app.use(express.static("client"));

server.listen(PORT, function () {
  console.log("Chat server running http://localhost:" + PORT);
});

var io = require("socket.io")(server);

io.on("connection", function (socket) {
  socket.on("message", function (msg) {
    io.emit("message", msg);
  });
});