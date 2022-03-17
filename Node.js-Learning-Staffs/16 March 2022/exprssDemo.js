var express = require("express");
var app = express();
// app.MethodType("URL", callback);
var myLogger = function(req, res, next)
{
    console.log("I am in logger");
    res.end;
    // next();
} 
app.use(myLogger);

app.get("/", function (req, res) {
  res.send("Hello");
  res.end();
});

app.get("/emp", function (req, res) {
  res.send("Hello Emp Get");
  res.end();
});

app.post("/emp", function (req, res) {
  res.send("Hello Emp Post");
  res.end();
});

app.put("/emp", function (req, res) {
  res.send("Hello Emp Put");
  res.end();
});

app.delete("/emp", function (req, res) {
  res.send("Hello Emp Delete");
  res.end();
});

app.listen(5000, function () {
  console.log("This is running on port 5000...");
});
