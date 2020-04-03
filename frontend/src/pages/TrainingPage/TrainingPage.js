import React from "react";
import Test from "./Test";

function Header({ title }) {
  return (
    <div>
      <h4>{title} </h4>
    </div>
  );
}
class TrainingPage extends React.Component {
  render() {
    return (
      <div className="container">
        <Test />
        <div className="row">
          <div className="col">Course Type</div>
          <div className="col">Certifying Body</div>
          <div className="col">Role</div>
        </div>

        <br />
        <br />
        <div className="row">
          <Header title="Leadership" />
        </div>
        <br />
        <div className="row">
          <Header title="Scaled Agile 5.0" />
        </div>
        <br />
        <div className="row">
          <Header title="Scrum.Org" />
        </div>
        <br />
        <div className="row">
          <Header title="Scrum Alliance" />
        </div>
        <br />
        <div className="row">
          <Header title="PMI" />
        </div>
        <br />
        <div className="row">
          <Header title="Corporate Training" />
        </div>
      </div>
    );
  }
}
export default TrainingPage;
