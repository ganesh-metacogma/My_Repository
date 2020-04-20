const express = require("express");
const messagebird = require("messagebird")("3uME3agK875dtxnjIw7ar5AhT");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/step2", (req, res) => {
  let mobile = req.body.mobile;
  //   let mobile = parsent(temp);

  var params = {
    originator: "MessageBird",
    recipients: [mobile],
    body: "This is a test message",
  };

  messagebird.verify.create(params, function (error, success) {
    if (error) {
      console.log("Failed to send otp", error);
      res.send(error);
    } else {
      console.log("Success", response);
      res.send(response.id);
    }
  });
});

app.post("/step3", (req, res) => {
  let id = req.body.id;
  let token = req.body.token;

  messagebird.verify.verify(id, token, function (error, success) {
    if (error) {
      console.log("Verification failed", error);
      res.send(error);
    } else {
      res.send("Verified");
    }
  });
});

app.listen("3020", () => {
  console.log("Server started");
});
