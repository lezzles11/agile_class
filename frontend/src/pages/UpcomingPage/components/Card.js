import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardHeader,
  MDBCardFooter,
  MDBContainer,
} from "mdbreact";

import { BrowserRouter as Router, Link } from "react-router-dom";
const style = {
  width: "200px",
};
export default function Card({
  transaction: { date, title, description, amount, type, account, role, url },
}) {
  return (
    <div className="container">
      <br />
      <br />
      <div className="card">
        <br />
        <div className="card-body">
          <div className="row">
            <div className="col-1"></div>
            <div className="col-2">
              <br />
              <h2>
                {" "}
                {date} <br />
                <br />
              </h2>
            </div>
            <div className="col-1"></div>
            <div className="col-5">
              <h4 className="card-title">
                <Link to={url}>{title}</Link>{" "}
              </h4>
              <h5>{description}</h5>

              <h6>{role}</h6>
            </div>
          </div>
          <br />
        </div>
      </div>
    </div>
  );
}
