let express = require("express");
let app = express();
let port = 3000;


app.listen(port, () => {
  console.log("Server is running on http://localhost:3000" + port)
})





app.get('/whisper' , (req, res) => {
  let name = req.query.name;
  res.send(name);
})





app.get('/full-Product-name' , (req, res) => {
  let companyName = req.query.companyName;
  let productName = req.query.productName;
  let fullProductName = companyName + " " + productName;
  res.send(fullProductName);
})





app.get('/date' , (req, res) => {
  let month = req.query.month;
  let year = req.query.year;
  let formattedDate = month + "/" + year;
  res.send(formattedDate);
})





app.get('/greet' , (req, res) => {
  let city = req.query.city;
  let greeting = "You live in " + city;
  res.send(greeting);
})





app.get('/capital' , (req, res) => {
  let capital = req.query.capital;
  let country = req.query.country;
  let countryCapital = capital + " is the capital of " + country;
  res.send(countryCapital)
})




app.get('/email' , (req, res) => {
  let firstName = req.query.firstName;
  let lastName = req.query.lastName;
  let domain = req.query.domain;
  let email = firstName + "." + lastName + "@" + domain;
  res.send(email);
})

