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

app.get(
  "/now",
  (req, res, next) => {
    req.time = new Date().toString();
    next();
  },
  (req, res) => {
    res.json({ time: req.time });
  }
);

app.get("/:word/echo", (req, res) => {
  let word = req.params.word;

  res.json({ echo: word });
});

app.get("/name", (req, res) => {
  let firstName = req.query.first;
  let lastName = req.query.last;

  res.json({ name: `${firstName} ${lastName}` });
});

module.exports = app;
