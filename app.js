var express = require('express');
var cors = require('cors');

var app = express();
app.use(cors());

app.use(express.static('./public'));

app.get('/catalog', function (req, res) {
   res.json([
   		{id: 1, title: "Buraco na via" , describe: "bla bla bla", user: "a@a.a", coord: "1245:1215" },
   		{id: 2, title: "Acidente de moto" , describe: "bla bla bla", user: "a@a.a", coord: "1245:1215" },
   		{id: 3, title: "Árvore caída" , describe: "bla bla bla", user: "a@a.a", coord: "1245:1215" }
   	]);
})

app.post('/catalog', function(req, res) {
  res.status(201).send("");
});

var server = app.listen(8080, function () {
  var port = server.address().port;
  console.log("App ouvindo na porta %s", port);
})
