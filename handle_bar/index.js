const fs = require("fs");
const express = require("express");
const app = express();
var exphbs = require("express-handlebars");
const PORT = 9090;

app.use(express.json());
app.use(express.urlencoded());
app.use("/static", express.static("public"));

app.engine(".hbs", exphbs({ extname: ".hbs" }));
app.set("view engine", ".hbs");

app.get("/", function(req, res) {
  res.render("home");
});

app
  .listen(PORT, function() {
    console.log("Application has started and running on port: ", PORT);
  })
  .on("error", function(error) {
    console.log("Unable to start app. Error >>>>", error);
  });
