const express = require("express");

const app = express();

app.set('view engine', 'ejs');

app.use('/statics',express.static('statics'));
// use inserta un nuevo middlelware en el stack de middlewares

app.get("/", (req, res) => {
  res.render('index');
});

app.listen(3000);
