import React from "react";
import Card from "./Card";
import Review_1 from "assets/Review_1.jpg";
import Review_2 from "assets/Review_2.jpg";
import Review_3 from "assets/Review_3.jpg";
import Review_4 from "assets/Review_4.jpg";
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
      Effort: 5 hours / week
      <br />
      Price: {price}
      <br />
      <br />
      <h3>Reviews</h3>
      <ImageAndCard url={Review_1} title={col2title1} text={col2text1} />
      <br />
      <ImageAndCard url={Review_2} title={col2title2} text={col2text2} />
      <br />
      <ImageAndCard url={Review_3} title={col2title1} text={col2text1} />
      <br />
      <ImageAndCard url={Review_4} title={col2title2} text={col2text2} />
    </div>
  );
}
export default SecondColumn;
