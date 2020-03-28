import React from "react";
import "./App.css";
import "./styles/officialstyles.css";
import Footer from "./components/Footer";
import ContactUsPage from "./pages/ContactUsPage";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import UpcomingCoursesPage from "./pages/UpcomingCoursesPage";
import CoursePage from "./pages/CoursePage";

export default class App extends React.Component {
  render() {
    return (
      <div className="font15">
        <Navbar />
        <Header />
        <CoursePage />
        <Footer />
      </div>
    );
  }
}
