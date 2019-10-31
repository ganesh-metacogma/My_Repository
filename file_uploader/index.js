const express = require("express");
const app = express();
var exphbs = require("express-handlebars");
var multer = require("multer");
const PORT = 9090;

var filestorage = multer.diskStorage({
  destination: function(req, file, cb) {
    return cb(null, "public/uploads/");
  },
  filename: function(req, file, cb) {
    console.log(file);
    var filename = new Date().getTime() + file.originalname;
    return cb(null, filename);
  }
});

var upload = multer({ storage: filestorage });

app.use(express.json());
app.use(express.urlencoded());
app.use("/public", express.static("public"));

var profilecontroler = require("./routes/profile.js");
app.engine(".hbs", exphbs({ extname: ".hbs" }));
app.set("view engine", ".hbs");

app.get("/", function(req, res) {
  res.render("home");
});

app.post(
  "/profile/register",
  upload.single("avatar"),
  profilecontroler.register
);

app
  .listen(PORT, function() {
    console.log("Application has started and running on port: ", PORT);
  })
  .on("error", function(error) {
    console.log("Unable to start app. Error >>>>", error);
  });
