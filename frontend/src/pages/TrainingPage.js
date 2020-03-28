import React from "react";

export default class TrainingPage extends React.Component {
  render() {
    return (
      <div className="container">
        <h2>Corporate Training</h2>
        <div className="row">
          <div className="col">
            <button className="btn">Value - Stream Workshop</button>

            <button className="btn">Safe Portfolio Management</button>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <button className="btn">Program Increment Workshop</button>

            <button className="btn">Inspect and Adapt</button>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <button className="btn">Product Management Workshop</button>

            <button className="btn">Team Building</button>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <button className="btn">Customized Scrum Workshop</button>

            <button className="btn">Customized Kanban Workshop</button>
          </div>
        </div>
      </div>
    );
  }
}
