const express = require("express");
const bodyParser = require("body-parser");
const sequelize = require("./database/sqlDatabase");
// const { urlencoded } = require("body-parser");

const expenseRouter = require("./routes/expenseRouter");
const signUpRouter = require("./routes/signUpRouter");
const signInRouter = require('./routes/signInRouter')
const app = express();

// app.use(bodyParser, urlencoded({ extended: false }));

app.use(signUpRouter);
app.use(signInRouter);
app.use(expenseRouter);

sequelize
  .sync()
  .then(() => {
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });
