import React from "react";
import "./App.css";
import "./styles/officialstyles.css";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";

export default class App extends React.Component {
  render() {
    return (
      <div className="font15">
        <Navigation />
        <br />
        <Footer />
      </div>
    );
  }
}
