const userCtrl = {};
const User = require("../models/user");

userCtrl.renderUser = async (req, res, next) => {
  try {
    let email = req.session.user_data.email,
      data = await User.findOne({ email });

    res.render("_user-data", { data });
  } catch (err) {
    console.log(err);
  }
};

module.exports = userCtrl;
