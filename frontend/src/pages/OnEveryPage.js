import React from "react";
import Header from "../components/Header";
import Navigation from "../components/Navigation";

export default class OnEveryPage extends React.Component {
  render() {
    return (
      <div>
        {" "}
        <Navigation />
        <Header />
        <div>
          <br />
          <br />{" "}
        </div>
      </div>
    );
  }
}
