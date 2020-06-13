const express = require("express");

const app = express();

app.get( '/', (req,res) => {
  res.send('Hola Desde Express')
})

app.listen(3000);