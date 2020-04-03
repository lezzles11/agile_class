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

const style = {
  width: "200px",
};
export default function Card({
  transaction: { date, title, image, description, amount, type, account, role },
}) {
  return (
    <MDBCard border="success" style={{ maxWidth: "18rem" }}>
      <MDBCardHeader transparent border="success">
        {date}
      </MDBCardHeader>
      <div className="card-body">
        <MDBCardTitle tag="h5">{title}</MDBCardTitle>
        <div className="row">
          <div className="col">
            {type} for {role}
            <div className="card-text">{description}</div>
          </div>
          <div className="col">
            {" "}
            <img style={style} src={image} />
          </div>
        </div>
      </div>
      <MDBCardFooter transparent border="success">
        Length of Course: {amount} days
      </MDBCardFooter>
    </MDBCard>
  );
}
