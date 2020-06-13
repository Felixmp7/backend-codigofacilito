const express = require("express");

const app = express();

app.use('/statics',express.static('statics'));
// use inserta un nuevo middlelware en el stack de middlewares

app.get("/", (req, res) => {
  res.sendFile('index.html',{
    root: __dirname
  });
});

app.listen(3000);
