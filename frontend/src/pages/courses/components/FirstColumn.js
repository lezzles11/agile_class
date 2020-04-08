import React from "react";
import Getinspired_1 from "assets/Instructor_1.jpg";
import Getinspired_2 from "assets/Instructor_2.jpg";

function Card({ cardtitle, cardtext }) {
  return (
    <div className="container">
      <div className="d-flex card">
        <div className="card-body">
          <div className="card-title">{cardtitle}</div>{" "}
          <div className="card-text">{cardtext}</div>
        </div>{" "}
      </div>
    </div>
  );
}

function ImageAndCard({ url, title, text }) {
  return (
    <div className="row">
      <div className="col-4">
        <br />
        <img className="img-fluid" src={url} />
      </div>
      <div className="col-8">
        <Card cardtitle={title} cardtext={text} />
      </div>
    </div>
  );
}

function FirstColumn({
  point1,
  point2,
  point3,
  point4,
  point5,
  point6,
  text1,
  text2,
  other,
  smalltitle1,
  smalltext1,
  smalltitle2,
  smalltext2,
}) {
  return (
    <div>
      <div>
        <h4>About This Course</h4> {text1}
        <br />
        <br />
        <h4>What You Will Learn</h4>
        {text2}
        <br />
        <br />
        <ul>
          {point1 && <li>{point1}</li>}

          {point2 && <li>{point2}</li>}

          {point3 && <li>{point3}</li>}

          {point4 && <li>{point4}</li>}

          {point5 && <li>{point5}</li>}

          {point6 && <li>{point6}</li>}
        </ul>
        <br />
        <p> {other}</p>
        <h4>Meet The Instructors</h4>
        <br />
        <ImageAndCard
          url={Getinspired_1}
          title={smalltitle1}
          text={smalltext1}
        />
        <br />
        <ImageAndCard
          url={Getinspired_2}
          title={smalltitle2}
          text={smalltext2}
        />
        <br />
      </div>
    </div>
  );
}

export default FirstColumn;
