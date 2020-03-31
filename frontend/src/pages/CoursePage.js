import React from "react";
import COURSENAME from "./courses/COURSENAME";
function CourseLogo() {
  const medImage = {
    width: "30%"
  };
  return (
    <div>
      <img
        style={medImage}
        src="https://www.dropbox.com/s/qcawzw73pxq48bo/SAFE%20logo.png?raw=1"
      />
    </div>
  );
}
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
function Card() {
  return (
    <div className="container">
      <div className="d-flex card">
        <div className="card-body">
          <h1>Card</h1>{" "}
        </div>{" "}
      </div>
    </div>
  );
}

function Layout() {
  return (
    <div>
      <FirstRow />
      <br />
      <div className="row">
        <div className="col-8">
          <FirstColumn />
        </div>
        <div className="col">
          <SecondColumn />
        </div>
      </div>
      <div className="row d-flex justify-content-center">
        <button className="btn">Register</button>
      </div>
    </div>
  );
}

function FirstRow() {
  return (
    <div>
      <div className="row">
        <div className="col"></div>
        <div className="col">
          <div className="d-flex justify-content-center">
            <img
              className="w-100 float-left"
              src="https://www.dropbox.com/s/qcawzw73pxq48bo/SAFE%20logo.png?raw=1"
            />
            <div className="col">
              {" "}
              Title <br />
              Start
              <br />
              Location
              <br />
              <button className="btn">Register</button>
            </div>
          </div>
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
}

function ImageAndCard() {
  return (
    <div className="row">
      <img
        className="w-25 float-left img-fluid"
        src="https://www.dropbox.com/s/h5e7xsjsriv8abe/P_1.jpg?raw=1"
      />
      <div className="col h-100">
        <Card />
      </div>
    </div>
  );
}
function FirstColumn() {
  return (
    <div>
      <h1> First Column </h1>
      <div>
        <h4>About This Course</h4>
        <Card />
        <br />
        <h4>What You Will Learn</h4>
        <Card />
        <br />
        <h4>Meet The Instructors</h4>
        <br />
        <ImageAndCard />
        <br />
        <ImageAndCard />
        <br />
      </div>
    </div>
  );
}

function SecondColumn() {
  return (
    <div>
      Length: <br />
      Effort: 20 hours / week
      <br />
      Price: $$
      <br />
      <br />
      <h3>Reviews</h3>
      <ImageAndCard />
      <br />
      <ImageAndCard />
      <br />
      <ImageAndCard />
      <br />
      <ImageAndCard />
    </div>
  );
}
function CoursePage() {
  return (
    <div className="container">
      <COURSENAME />
    </div>
  );
}

export default CoursePage;
