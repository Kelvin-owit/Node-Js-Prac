const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/bmicalculator", function (req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/", function (req, res) {
  var height = parseFloat(req.body.num2);
  var weight = parseFloat(req.body.num1);

  var bmi = weight / (height * height);

  res.send("Your BMI is " + bmi);
});

app.listen(3000, function () {
  console.log("server started on port 3000");
});
