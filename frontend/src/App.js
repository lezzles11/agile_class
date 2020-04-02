import React from "react";
import "./App.css";
import "./styles/officialstyles.css";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import Routes from "./Routes";
export default class App extends React.Component {
  render() {
    return (
      <div className="font15">
        <Navigation />
        <br />

        <Routes />
        <Footer />
      </div>
    );
  }
}
