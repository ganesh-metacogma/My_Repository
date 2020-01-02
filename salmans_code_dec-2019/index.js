const fs = require("fs");
const express = require("express");
const app = express();
const exphbs = require("express-handlebars");
const mongoose = require("mongoose");
const methodOverride = require('method-override');
const PORT = 8008;
​
// Configuration
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/public", express.static("public"));
const hbs = exphbs.create({
    extname: ".hbs",
    helpers: {
        linePrice: (a, b) => {
            result = parseInt(a) * parseInt(b);
            return result;
        },
    }
});
app.engine(".hbs", hbs.engine);
app.set("view engine", ".hbs");
app.use(methodOverride('_method'));
​
mongoose.connect(
    "mongodb://localhost:27017/cart",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    }
);
​
const pageController = require("./controllers/cart.js");
​
app.get("/", pageController.home);
app.post("/cart/add", pageController.add);                          // Adding
app.delete("/cart/remove/:id", pageController.remove);              // Remove
app.put("/cart/update/:val/:operation/:id", pageController.update); // Update
app.get("/cart/retrive", pageController.retrive);                   // Retrive
​
//Port
app
    .listen(PORT, () => {
        console.log("Started : ", PORT);
    })
    .on("error", () => {
        console.log("Unable To Start App >>>", err);
    });