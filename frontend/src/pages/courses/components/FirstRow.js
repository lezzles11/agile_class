import React from "react";

function FirstRow({ url, title, start, location }) {
  return (
    <div>
      <div className="row">
        <div className="col"></div>
        <div className="col">
          <div className="d-flex justify-content-center">
            <img className="w-100 float-left" src={url} />
            <div className="col">
              <br />
              <br /> <h4> {title}</h4>
              <br /> <br />
              <h5> Summer 2020</h5>
              <br />
              <h5> Boston</h5>
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

export default FirstRow;
