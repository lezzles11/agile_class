import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Section from "./components/Section";
import ReactDOM from "react-dom";
import FormPage from "./components/FormPage";
import "./styles/officialstyles.css";
import TeamPage from "./components/AboutUs";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ScrollingImages from "./components/ScrollingImages";
import CourseInfo from "./components/CourseInfo";
import Assessments from "./components/Assessments";
import TrainingPage from "./pages/TrainingPage";
import RegisterPage from "./pages/RegisterPage";
import CoachingPage from "./pages/CoachingPage";
import UpcomingCoursesPage from "./pages/UpcomingCoursesPage";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import Header from "./components/Header";
import OnEveryPage from "./pages/OnEveryPage";
import ContactUsPage from "./pages/ContactUsPage";
import Homepage from "./pages/Homepage";

export default class App extends React.Component {
  render() {
    return (
      <div className="font15">
        <OnEveryPage />
        <br />
        <br />
        <br />
        <br />
        <br />
        <UpcomingCoursesPage />
        <ContactUsPage />
      </div>
    );
  }
}
