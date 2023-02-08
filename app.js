const express = require("express");
const bodyParser = require("body-parser");
const sequelize = require("./database/sqlDatabase");
// const { urlencoded } = require("body-parser");

const signUpRouter = require("./routes/SignUp");
const app = express();

// app.use(bodyParser, urlencoded({ extended: false }));

app.use(signUpRouter);
sequelize
  .sync({ force: true })
  .then(() => {
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });
