const ProfileController = {};

ProfileController.register = function(req, res) {
  console.log(req.body);

  return res.render("avatar", {
    succuess: true,
    message: "Succussfully uploaded",
    data: req.file
  });
};
module.exports = ProfileController;
