const express = require("express");
// const messagebird = require("messagebird")("7hymcxy2DjECaTGOu5ZZFmAmC");
const config = require("./config");
const client = require("twilio")(config.accountSID, config.authToken);
const app = express();
const bodyParser = require("body-parser");
app.use(express.json());
app.use(express.urlencoded());

app.use(bodyParser.urlencoded({ extended: true }));

app.post("/step1", (req, res) => {
  let { query } = req;

  client.verify
    .services(config.serviceID)
    .verifications.create({ to: `+91${query.mobile}`, channel: query.channel })
    .then((res) => {
      console.log("step1", res);
      res.status(200).send(res.status);
    })
    .catch((error) => {
      res.send(error);
    });
});

app.post("/step2", (req, res) => {
  let { query } = req;

  client.verify
    .services(config.serviceID)
    .verificationChecks.create({ to: `+91${query.mobile}`, code: query.code })
    .then((res) => {
      console.log("Step2", res);
      res.status(200).send(res.status);
    })
    .catch((error) => {
      res.send(error);
    });
});

// app.post("/step2", (req, res) => {
//   let mobile = req.body.mobile;
//   console.log("Mobile", mobile);
//   let mobile = parsent(temp);

// var params = {
//   originator: "MessageBird",
//   recipients: mobile,
//   body: "This is a test message",
// };

//   messagebird.verify.create(
//     mobile,
//     {
//       template: "This is a test message %token",
//     },
//     function (error, success) {
//       if (error) {
//         console.log("Failed to send otp", error);
//         res.send(error);
//       } else {
//         console.log("Success", success);
//         res.send(success.id);
//       }
//     }
//   );
// });

// app.post("/step3", (req, res) => {
//   let id = req.body.id;
//   let token = req.body.token;

//   messagebird.verify.verify(id, token, function (error, success) {
//     if (error) {
//       console.log("Verification failed", error);
//       res.send(error);
//     } else {
//       res.send("Verified");
//     }
//   });
// });

app.listen("3020", () => {
  console.log("Server started");
});
