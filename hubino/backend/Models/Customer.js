const mongoose = require("mongoose");
mongoose.set("useFindAndModify", false);

const customerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: String,
      required: true,
      unique: true,
    },
    gender: {
      type: String,
      required: true,
    },
  },
  { collection: "customers" }
);

const Customer = mongoose.model("Customer", customerSchema);

module.exports = Customer;
