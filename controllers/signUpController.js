const path = require("path");
const Users = require("../models/users");
const rootDir = require("../util/rootDir.js");

exports.getSignUpData = (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "signUp.html"));
};

exports.postSignUpData = (req, res, next) => {
  Users.create({
    userName: req.body.userName,
    email: req.body.email,
    password: req.body.password,
  })
    .then(() => {
      res.redirect("/signUp");
    })
    .catch((err) => {
      console.log(err);
      res.send(`<p>${err}</p>`);
    });
};
