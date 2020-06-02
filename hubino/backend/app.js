const express = require("express");
const app = express();
const db = require("./database");
const cors = require("cors");
const path = require("path");

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

// import controller
const controller = require("./controllers/customer");

//Routes
app.post("/create-customer", controller.add);

app.get("/customer", controller.list);
app.put("/update-customer/:id", controller.update);
app.delete("/delete-customer/:id", controller.delete);

// Server Static assets if in production
if (process.env.NODE_ENV === "production") {
  // Set a static folder
  app.use(express.static("frontend/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend", "build", "index.html"));
  });
}

module.exports = app;
