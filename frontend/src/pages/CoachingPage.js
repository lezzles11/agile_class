import React from "react";
import JumboCard2 from "../components/JumboCard2";

export default class CoachingPage extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>Coaching Page</h1>
        <div className="row">
          <JumboCard2
            title="Agile Transformation"
            subtitle="Location"
            button1="Read More"
            button2="Dates"
          />{" "}
        </div>
        <div className="row">
          <JumboCard2
            title="DevOps Transformation"
            subtitle="Location"
            button1="Read More"
            button2="Dates"
          />{" "}
        </div>
        <div className="row">
          {" "}
          <JumboCard2
            title="Tools, Assessments and Implementation"
            subtitle="Location"
            button1="Read More"
            button2="Dates"
          />{" "}
        </div>
      </div>
    );
  }
}
