const Customer = require("./../Models/Customer");

const customerController = {};

//Add
customerController.add = (req, res) => {
  let { body } = req;
  Customer.create(body)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send("Failed to add Customer!");
    });
};

//Get
customerController.list = (req, res) => {
  Customer.find({})
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((err) => {
      console.log(err);
      res.send(400).send("Failed to get Customers!");
    });
};

//Update
customerController.update = (req, res) => {
  let { params, body } = req;
  Customer.findByIdAndUpdate({ _id: params.id }, body)
    .then((response) => {
      res.status(200).send("Customer Updated");
    })
    .catch((err) => {
      console.log(err);
      res.send(400).send("Failed to update Customers!");
    });
};

//Delete
customerController.delete = (req, res) => {
  let { params } = req;
  Customer.findByIdAndDelete({ _id: params.id })
    .then((response) => {
      res.status(200).send("Customer Deleted");
    })
    .catch((err) => {
      console.log(err);
      res.send(400).send("Failed to delete Customers!");
    });
};
module.exports = customerController;
