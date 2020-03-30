import React from "react";
import "./App.css";
import "./styles/officialstyles.css";
import Footer from "./components/Footer";
import RegisterPage from "./pages/RegisterPage";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import CoursePage from "./pages/CoursePage";

export default class App extends React.Component {
  render() {
    return (
      <div className="font15">
        <Navbar />
        <h1> NOTES </h1>
        <br /> Agile Team D -> content writing
        <br />
        do backend at the same time
        <br />
        Create sample json data - and then put it on trello? - put it in the
        content writing folder and title it "Code format"
        <br /> Finish backend by tuesday <br /> Finish
        <br />
        1. Final documents (images) <br />
        <br />
        Put in logo <br />
        Finish <br />
        Course Page and Registration
        <br />
        Maybe meeting tomorrow? <br />
        TUESDAY MEETING (3-4 PM) -
        <br /> To Do: <br />
        routing, connect to navbar, data needs to be in json, lesleyc@bu.edu
        <Header />
        <h1>Registration Page</h1>
        <RegisterPage />
        <h1>Course Page</h1>
        <CoursePage />
        <Footer />
      </div>
    );
  }
}
