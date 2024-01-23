require("dotenv").config();
let express = require("express");
let app = express();
absolutePath = __dirname + "/views/index.html";
let message = { message: "Hello json" };

app.use((req, res, next) => {
  let string = req.method + " " + req.path + " - " + req.ip;
  console.log(string);
  next();
});
app.use("/public", express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.sendFile(absolutePath);
});

app.get("/json", (req, res) => {
  res.json(
    process.env.MESSAGE_STYLE === "uppercase"
      ? message.message.toUpperCase()
      : message
  );
});

module.exports = app;
