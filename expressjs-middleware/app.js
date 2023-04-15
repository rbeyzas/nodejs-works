const express = require("express");
const app = express();

app.use("/user", (req, res, next) => {
  res.send("The middleware that handles /user");
  next();
});

app.use("/", (req, res, next) => {
  res.send("The middleware that handles /");
});

app.listen(3000);
