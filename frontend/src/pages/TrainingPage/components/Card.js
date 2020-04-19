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
  transaction: {
    date,
    title,
    image,
    description,
    amount,
    type,
    account,
    role,
    url,
  },
}) {
  return (
    <div>
	<h4>{account}</h4>
      <Link to={url}>
        <div className="row">
          <div className="col">
            {" "}
            <img style={style} src={image} />
          </div>
        </div>
      </Link>
    </div>
  );
}
