import React from "react";

function Card({ cardtitle, cardtext }) {
  return (
    <div className="container">
      <div className="d-flex card">
        <div className="card-body">
          <h1>{cardtitle}</h1>
          <p>{cardtext}</p>
        </div>{" "}
      </div>
    </div>
  );
}

export default Card;
