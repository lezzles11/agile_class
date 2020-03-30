import React from "react";
import "./App.css";
import "./styles/officialstyles.css";
import Footer from "./components/Footer";
import OnEveryPage from "./pages/OnEveryPage";

export default class App extends React.Component {
  render() {
    return (
      <div className="font15">
        <OnEveryPage />
        <br />
        <Footer />
      </div>
    );
  }
}
