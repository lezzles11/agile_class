import React from "react";
import RegisterForm from "../components/RegisterForm";

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
