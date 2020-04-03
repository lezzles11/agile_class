import React from "react";
import Card from "./Card";
function ImageAndCard({ url, title, text }) {
  const bigImage = {
    width: "100%",
  };
  return (
    <div className="row">
      <div className="col-4">
        <br />
        <img style={bigImage} className="float-left" src={url} />
      </div>

      <div className="col-8">
        <br />
        <Card cardtitle={title} cardtext={text} />
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
  col2title4,
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
      <br />
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
export default SecondColumn;
