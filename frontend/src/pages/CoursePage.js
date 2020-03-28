import React from "react";

function Oscar() {
  const bigImage = {
    width: "50%"
  };
  const medImage = {
    width: "30%"
  };
  const smallImage = {
    width: "15%"
  };
  return (
    <div>
      FIRST IMAGE
      <img
        style={bigImage}
        src="https://www.dropbox.com/s/qcawzw73pxq48bo/SAFE%20logo.png?raw=1"
      />
      <br />
      SECOND IMAGE
      <img
        style={smallImage}
        src="https://www.dropbox.com/s/h5e7xsjsriv8abe/P_1.jpg?raw=1"
      />
      {/* TEMPLATE <img src="" /> */}
    </div>
  );
}

function CoursePage() {
  return (
    <div className="container">
      <br />
      <h1> Course Page </h1>
      <Oscar />
      <div className="row">
        <div className="col">
          <img src="https://www.dropbox.com/s/qcawzw73pxq48bo/SAFE%20logo.png?raw=1" />
        </div>

        <div className="col">
          {" "}
          Title <br />
          Start
          <br />
          Location
          <br />
          <button className="btn blue">Register</button>
        </div>
      </div>
      https://mdbootstrap.com/
      <div className="row">
        <div className="col-9">
          <div className="card">
            <div className="card-body">
              <div className=""></div>
            </div>
          </div>
        </div>

        <div className="col-3"></div>

        <div className="col"></div>
      </div>
    </div>
  );
}

export default CoursePage;
