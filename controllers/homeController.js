require("dotenv").config();

exports.home = async (req, res, next) => {
  res.render("index", {
    user: process.env.USER,
  });
};
