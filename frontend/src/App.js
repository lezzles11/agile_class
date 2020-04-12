import React from "react";
import "./App.css";
import "./styles/officialstyles.css";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import Routes from "./Routes";
import Header from "./components/Header";
import Test from "./pages/TrainingPage/Test";

function Notes() {
  return (
    <div className="container">
      <div className="row">
        <h1> DEADLINE: April 22nd</h1>
      </div>
    </div>
  );
}

export default class App extends React.Component {
  render() {
    return (
      <div className="font15">
        <Navigation />
        <br />
        <div className="row">
          <Header />
        </div>
        <br />
        <br />
        <br />
        <div className="container">
          <div className="row">
            <Routes />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
