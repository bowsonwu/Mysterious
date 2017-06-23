var express = require("express");
var fs = require('fs');
var SQL = require('./sql.js');

var app = express();
var router = express.Router();
var path = __dirname + '/views/';

// Load the db
var filebuffer = fs.readFileSync('stock.db');
var db = new SQL.Database(filebuffer);

// static
app.use('/public', express.static(__dirname + '/public'));

// general
router.use(function (req, res, next) {
  console.log("/" + req.method);
  next();
});

router.get("/", function (req, res) {
  res.sendFile(path + "index.html");
});

app.use("/", router);

// restful api
// Create a router to handle routes for a set of apiRouter
var apiRouter = express.Router();

// CREATE (/restful/robots)
apiRouter.post('/exDididend', function (req, res) {
  // ...
  res.json({ name: req.body.name, message: "我已經收到機器人名字:" + req.body.name });
});

// READ ALL & FORM (/restful/robots)
apiRouter.get('/exDividend', function (req, res) {
  // ...
  res.json({ message: "你要的機器人列表!!" });

});

// READ (/restful/robots/:id)
apiRouter.get('/exDividend/:id', function (req, res) {


  var stmt = db.prepare('SELECT * FROM ExDividend WHERE stockId = $stockId;');
  stmt.bind({ $stockId: req.params.id });
  
  var data = Array();
  while (stmt.step()) {
    data.push(stmt.getAsObject());
  }
  res.json(data);
});

// UPDATE ((/restful/robots/:id))
apiRouter.put('/robots/:id', function (req, res) {
  // ...
  res.json({ id: req.params.id, message: "我要改造機器人" + req.params.id + "號!" });

});

// DELETE (/restful/robots/:id)
apiRouter.delete('/robots/:id', function (req, res) {
  // ...
  res.json({ id: req.params.id, message: "美江說,他要買" + req.params.id + "號-機器人" });
});
//讓此路徑適用於這個router
app.use('/api', apiRouter);

// 404
app.use("*", function (req, res) {
  res.sendFile(path + "404.html");
});

app.listen(3000, function () {
  console.log("Live at Port 3000");
});