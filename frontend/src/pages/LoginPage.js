import React from "react";

import { BrowserRouter as Router, Link } from "react-router-dom";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBInput
} from "mdbreact";
function Login() {
  return (
    <div className="container">
      <div className="col"></div>
      <div className="col justify-text-center text-center">
        <form>
          <h1>Login</h1>
          <MDBCardBody className="mx-4 mt-4">
            <MDBInput label="User Name" group type="text" validate />
            <MDBInput label="Password" group type="password" validate />
            <p>
              <Link to="/register">Forgot Password? </Link>
            </p>
			<MDBBtn color="blue">Login</MDBBtn>
          </MDBCardBody>
        </form>
      </div>

      <div className="col"></div>
    </div>
  );
}
export default Login;
