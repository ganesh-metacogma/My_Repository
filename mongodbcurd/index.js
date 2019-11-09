const express = require("express");
const app = express();
const MongoClient = require("mongodb").MongoClient;
var exphbs = require("express-handlebars");
const PORT = 9090;

app.use(express.json());
app.use(express.urlencoded());
app.use("/public", express.static("public"));

//Handlebar configuration
app.engine(".hbs", exphbs({ extname: ".hbs" }));
app.set("view engine", ".hbs");

//Database connection
var db = null;
var collection = null;
var url = "mongodb://localhost:27017";
MongoClient.connect(url, function(error, client) {
  if (error) {
    throw error;
  }
  db = client.db("eagle-ganesh-dasari");
  collection = db.collection("users");
});
app.get("/insertpage", function(req, res) {
  return res.render("insertpage");
});

app.post("/insert", function(req, res) {
  var data = req.body;
  collection.insertOne(data, function(error, data) {
    if (error) {
      return res.status(500).send("<h1>Data Insertion Failed</h1>");
    }
    return res.redirect("/");
  });
});

app.get("/", function(req, res) {
  collection.find({}).toArray(function(error, data) {
    if (error) {
      return res.render("home", {
        status: false,
        message: "Falied to get the list! "
      });
    }

    return res.render("home", {
      status: true,
      data: data
    });
  });
});

app
  .listen(PORT, function() {
    console.log("Application has started and running on port: ", PORT);
  })
  .on("error", function(error) {
    console.log("Unable to start app. Error >>>>", error);
  });
