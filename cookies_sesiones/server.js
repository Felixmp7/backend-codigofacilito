const express = require("express");
const cookieSession = require("cookie-session");

const app = express();

app.use(cookieSession({
  name: 'session',
  keys: ['value1', 'value2']
}));

// app.set('view engine', 'ejs');

// app.use('/statics',express.static('statics', {
//   etag: false,
//   maxAge: '5h'
// }));
// use inserta un nuevo middlelware en el stack de middlewares

app.get("/", (req, res) => {
  // res.render('index');
  req.session.visits = req.session.visits || 0;
  req.session.visits = req.session.visits + 1;

  res.send(`${req.session.visits} visita(s)`)
});

app.listen(3000);
