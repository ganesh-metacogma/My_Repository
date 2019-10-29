const express = require("express");
const app = express();
var exphbs = require("express-handlebars");
const PORT = 9090;

app.use(express.json());
app.use(express.urlencoded());
app.use("/static", express.static("public"));

const hbs = exphbs.create({
  extname: ".hbs",
  helpers: {
    increment: function(value, options) {
      return "Player" + (parseInt(value) + 1);
    }
  }
});
app.engine(".hbs", hbs.engine);
app.set("view engine", ".hbs");

app.get("/", function(req, res) {
  var players = [
    { name: "Virat", score: 201, availability: false },
    { name: "Sachin", score: 51, availability: false },
    { name: "Dhoni", score: 101, availability: false },
    { name: "Pandya", score: 81, availability: false }
  ];
  res.render("home", {
    title: "Players score",
    players: players
  });
});

app
  .listen(PORT, function() {
    console.log("Application has started and running on port: ", PORT);
  })
  .on("error", function(error) {
    console.log("Unable to start app. Error >>>>", error);
  });
