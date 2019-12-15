const express = require("express");
const app = express();
const MongoClient = require("mongodb").MongoClient;
var exphbs = require("express-handlebars");

const methodOverride = require("method-override");
app.use(methodOverride("_method"));
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
app.get("/deletepage", function(req, res) {
  return res.render("deletepage");
});
app.get("/updatepage", function(req, res) {
  return res.render("updatepage");
});

app.post("/users", function(req, res) {
  var data = req.body;
  collection.insertOne(data, function(error, data) {
    if (error) {
      return res.status(500).send("<h1>Data Insertion Failed</h1>");
    }
    return res.render("home");
  });
});

app.get("/users", function(req, res) {
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

app.put("/users", function(req, res) {
  var data = req.body;
  var collection = db.collection("users");
  console.log("Put >>>>>", data);
  collection.updateOne({ username: data.username }, { $set: data }, function(
    error,
    result
  ) {
    if (error) {
      return res.send({
        status: false,
        message: "Failed to update student"
      });
    } else {
      return res.render("home");
    }
  });
});

app.delete("/users", function(req, res) {
  var collection = db.collection("users");
  var data = req.body;
  collection.deleteOne({ data }, function(error, result) {
    if (error) {
      return res.send({
        status: false,
        message: "Failed to delete students"
      });
    } else {
      return res.render("home");
    }
  });
});

app
  .listen(PORT, function() {
    console.log("Application has started and running on port: ", PORT);
  })
  .on("error", function(error) {
    console.log("Unable to start app. Error >>>>", error);
  });
