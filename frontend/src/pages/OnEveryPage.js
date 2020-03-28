import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

export default class OnEveryPage extends React.Component {
  render() {
    return (
      <div>
        {" "}
        <Navbar />
        <br />
        <br />
        <Header />
        <div>
          <br />
          <br />{" "}
        </div>
      </div>
    );
  }
}
