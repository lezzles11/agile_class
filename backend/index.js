const express = require("express");
const app = express();

let users = [
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
  },
  {
    id: 2,
    fullName: "robert cheung",
    email: "robertc@bu.edu",
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
  res.json(users);
});

app.get("/api/users/:id", (request, response) => {
  const id = Number(request.params.id);
  const eachUser = users.find(u => u.id === id);
  if (eachUser) {
    response.json(eachUser);
  } else {
    response.status(404).end();
  }
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
