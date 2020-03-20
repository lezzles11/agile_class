const express = require("express");
const app = express();

let registration = [
  {
    id: 1,
    fullName: "lesley cheung",
    email: "lesleyc@bu.edu",
    password: "password",
    country: "hong kong",
    mailingAddress: "boston",
    contactNumber: "123456789",
    courses: "agile",
    paymentInfo: "1234123412341234"
  }
];

app.get("/", (req, res) => {
  res.send("<h1>Hello World!</h1>");
});

app.get("/api/users", (req, res) => {
  res.json(registration);
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
