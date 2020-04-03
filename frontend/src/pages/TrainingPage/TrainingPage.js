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

        <br />
        <br />
      </div>
    );
  }
}
export default TrainingPage;
