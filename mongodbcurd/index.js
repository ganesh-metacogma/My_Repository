const express = require("express");
const app = express();
const MongoClient = require("mongodb").MongoClient;
const PORT = 9090;

app.use(express.json());
app.use(express.urlencoded());
app.use("/public", express.static("public"));

//Database connection
var db = null;
var collection = null;
var url = "mongodb://localhost:27017";
MongoClient.connect(url, function(error, client) {
  if (error) {
    throw error;
  }
  db = client.db("eagle-db");
  collection = db.collection("students");
});

app.post("/insert", function(req, res) {
  var data = req.body;
  collection.insertOne(data, function(error, data) {
    if (error) {
      return res.status(500).json({
        status: false,
        message: "Falied to insert"
      });
    }
    return res.status(200).json({
      status: true,
      message: "Insert Successful"
    });
  });
});

app.get("/retrive", function(req, res) {
  var collection = db.collection("students");
  collection.find({}).toArray(function(error, data) {
    if (error) {
      return res.status(500).json({
        status: false,
        message: "Falied to insert"
      });
    }

    return res.status(200).json({
      status: true,
      message: data
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
