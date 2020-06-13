const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile('index.html',{
    root: __dirname
  });
  // res.send(__dirname);
});

// // POST
// app.post("/saludo", (req, res) => {
//   res.send(`Hola ${req.body.name}`);
// });

app.listen(3000);
