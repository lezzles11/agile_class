import React from "react";
const style = {
  height: "150px",
};
function FirstRow({ url, title, start, location }) {
  return (
    <div>
      <div className="row">
        <div className="col-2"></div>
        <div className="col">
          <br />
          <br />
          <img style={style} className="img-fluid float-right" src={url} />
        </div>
        <div className="col">
          <br />
          <br /> <h4> {title}</h4>
          <br />
          <h5> Summer 2020</h5>
          <br />
          <h5> Boston</h5>
          <br />
          <button className="btn">Register</button>
        </div>
        <div className="col-2"></div>
      </div>
    </div>
  );
}

export default FirstRow;
