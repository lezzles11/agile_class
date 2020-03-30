import React from "react";
import Header from "../components/Header";
import Navigation from "../components/Navigation";

export default class OnEveryPage extends React.Component {
  render() {
    return (
      <div>
        <div className="row">
          <Header className="navbar-expand-lg" />
          <Navigation />
        </div>
      </div>
    );
  }
}
