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
      <div>
        <form>
          <MDBCardBody className="mx-4 mt-4">
            <MDBInput label="User Name" group type="text" validate />
            <MDBInput label="Password" group type="password" validate />
            <p>
              <Link to="/register">Forgot Password? </Link>
            </p>
            <MDBBtn
              className="btn"
              type="button"
              className="btn-block z-depth-2"
            >
              Submit
            </MDBBtn>
          </MDBCardBody>
        </form>
      </div>
    </div>
  );
}
export default Login;
