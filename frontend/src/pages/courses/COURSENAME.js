import React from "react";

/* CHANGE 
FIRSTROW
FIRSTCOLUMN
SECONDCOLUMN 

*/

function Layout() {
  return (
    <div>
      <FirstRow
        url="https://itroos.net/wp-content/uploads/2018/07/agile-logo-768x621.png"
        title="Agile Title"
        start="December 11"
        location="Boston"
      />
      <br />

      <div className="row">
        <div className="col-8">
          <FirstColumn
            title1="title1"
            text1="text1"
            title2="title2"
            text2="text2"
            smalltitle1="smalltitle1"
            smalltext1="smalltext1"
            smalltitle2="smalltitle2"
            smalltext2="smalltext2"
          />
        </div>
        <div className="col">
          <SecondColumn
            length="20 hours"
            price="$$"
            effort="A LOT "
            col2title1="col2title1"
            col2text1="col2text1"
            col2title2="col2title2"
            col2text2="col2text2"
            col2text3="col2text3"
            col2title3="col2title3"
            col2text4="col2text4"
            col2title4="col2title4"
          />
        </div>
      </div>

      <div className="row d-flex justify-content-center">
        <button className="btn">Register</button>
      </div>
    </div>
  );
}

function FirstRow({ url, title, start, location }) {
  return (
    <div>
      <div className="row">
        <div className="col"></div>
        <div className="col">
          <div className="d-flex justify-content-center">
            <img className="w-100 float-left" src={url} />
            <div className="col">
              {" "}
              {title}
              <br />
              {start}
              <br />
              {location}
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

function ImageAndCard({ url, title, text }) {
  const bigImage = {
    width: "100%"
  };
  return (
    <div className="row">
      <div className="col-4">
        <br />
        <img style={bigImage} className="float-left" src={url} />
      </div>
      <div className="col-8">
        <Card cardtitle={title} cardtext={text} />
      </div>
    </div>
  );
}

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

function FirstColumn({
  title1,
  text1,
  title2,
  text2,
  smalltitle1,
  smalltext1,
  smalltitle2,
  smalltext2
}) {
  return (
    <div>
      <h1> First Column </h1>
      <div>
        <h4>About This Course</h4>
        <Card cardtitle={title1} cardtext={text1} />
        <br />
        <h4>What You Will Learn</h4>

        <Card cardtitle={title2} cardtext={text2} />
        <br />
        <h4>Meet The Instructors</h4>
        <br />
        <ImageAndCard
          url="https://pmcvariety.files.wordpress.com/2018/12/jake-gyllenhaal.jpg?w=1000"
          title={smalltitle1}
          text={smalltext1}
        />
        <br />
        <ImageAndCard
          url="https://media1.popsugar-assets.com/files/thumbor/ptdgPx5tCvvD9kUsU7pQFMUkBIA/207x134:1865x1792/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2019/09/09/028/n/1922398/066318895d76e2ef0c31d8.46065434_/i/Jennifer-Aniston.jpg"
          title={smalltitle2}
          text={smalltext2}
        />
        <br />
      </div>
    </div>
  );
}

function SecondColumn({
  length,
  effort,
  price,
  col2title1,
  col2text1,
  col2title2,
  col2text2,
  col2text3,
  col2title3,
  col2text4,
  col2title4
}) {
  return (
    <div>
      Length: {length} <br />
      Effort: {effort} hours / week
      <br />
      Price: {price}
      <br />
      <br />
      <h3>Reviews</h3>
      <ImageAndCard
        url="https://media1.popsugar-assets.com/files/thumbor/ptdgPx5tCvvD9kUsU7pQFMUkBIA/207x134:1865x1792/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2019/09/09/028/n/1922398/066318895d76e2ef0c31d8.46065434_/i/Jennifer-Aniston.jpg"
        title={col2title1}
        text={col2text1}
      />
      <br />
      <ImageAndCard
        url="https://media1.popsugar-assets.com/files/thumbor/ptdgPx5tCvvD9kUsU7pQFMUkBIA/207x134:1865x1792/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2019/09/09/028/n/1922398/066318895d76e2ef0c31d8.46065434_/i/Jennifer-Aniston.jpg"
        title={col2title2}
        text={col2text2}
      />
      <br />{" "}
      <ImageAndCard
        url="https://media1.popsugar-assets.com/files/thumbor/ptdgPx5tCvvD9kUsU7pQFMUkBIA/207x134:1865x1792/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2019/09/09/028/n/1922398/066318895d76e2ef0c31d8.46065434_/i/Jennifer-Aniston.jpg"
        title={col2title3}
        text={col2text3}
      />
      <br />{" "}
      <ImageAndCard
        url="https://media1.popsugar-assets.com/files/thumbor/ptdgPx5tCvvD9kUsU7pQFMUkBIA/207x134:1865x1792/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2019/09/09/028/n/1922398/066318895d76e2ef0c31d8.46065434_/i/Jennifer-Aniston.jpg"
        title={col2title4}
        text={col2text4}
      />
    </div>
  );
}
function COURSENAME() {
  return (
    <div className="container">
      <h1> COURSE ONE </h1>
      <Layout />
    </div>
  );
}

export default COURSENAME;
