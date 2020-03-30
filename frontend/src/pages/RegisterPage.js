import React, { useState, useEffect } from "react";
import RegisterForm from "../components/RegisterForm";
function Postgres() {
  const [users, setUsers] = useState(false);
  useEffect(() => {
    getUser();
  }, []);
  function getUser() {
    fetch("http://localhost:3001")
      .then(response => {
        return response.text();
      })
      .then(data => {
        setUsers(data);
      });
  }
  function createUser() {
    let fullName = prompt("Enter full name");
    let email = prompt("Enter email");
    let password = prompt("Enter password");
    let country = prompt("Enter country");
    let mailingAddress = prompt("Enter mailing address");
    let contactNumber = prompt("Enter contact number");
    let courses = prompt("Enter courses");
    let paymentInfo = prompt("Enter payment information");
    fetch("http://localhost:3001/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        fullName,
        email,
        password,
        country,
        mailingAddress,
        contactNumber,
        courses,
        paymentInfo
      })
    })
      .then(response => {
        return response.text();
      })
      .then(data => {
        alert(data);
        getUser();
      });
  }
  return (
    <div>
      {users ? users : "There are no added users"}
      <br />
      <button onClick={createUser}>Add user</button>
    </div>
  );
}

export default class RegisterPage extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="text-center">
          <br />
          <br />
          <br />
          <RegisterForm />
        </div>
      </div>
    );
  }
}
