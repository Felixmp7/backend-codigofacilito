const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

// GET
app.get( '/saludo', (req,res) => {
  res.send(`Hola ${req.query.name}`)
})

// POST
app.post( '/saludo', (req,res) => {
  res.send(`Hola ${req.body.name}`)
})

app.listen(3000);