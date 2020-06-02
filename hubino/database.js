const mongoose = require("mongoose");

const mongo_url =
  "mongodb+srv://root:partypanda@cluster0-vmkir.mongodb.net/hubino?retryWrites=true&w=majority";

//"mongodb://localhost:27017/hubino";
mongoose.set("useNewUrlParser", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);

mongoose.connect(
  mongo_url,
  { useNewUrlParser: true, useUnifiedTopology: true },
  function (err) {
    if (err) {
      throw err;
    } else {
      console.log(`Successfully connected to ${mongo_url}`);
    }
  }
);

module.exports = mongoose;
