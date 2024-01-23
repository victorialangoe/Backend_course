let express = require("express");
let app = express();
absolutePath = __dirname + "/views/index.html";
message = { message: "Hello json" };

app.use("/public", express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.sendFile(absolutePath);
});

app.get("/json", (req, res) => {
  res.json(message);
});

module.exports = app;
