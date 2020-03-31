import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavbarBrand, MDBBtn } from "mdbreact";

import {
  faFacebook,
  faTwitter,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Homepage from "../pages/HomePage";
import ContactUsPage from "../pages/ContactUsPage";
import CoachingPage from "../pages/CoachingPage";
import CoursePage from "../pages/CoursePage";
import AssessmentPage from "../pages/AssessmentPage";
import TrainingPage from "../pages/TrainingPage";
import SocialButtonsPage from "./SocialButtonsPage";

import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

var FA = require("react-fontawesome");
export default function Navigation() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <Router>
      <div>
        <nav className="white navbar navbar-dark  fixed-top navbar-expand-lg scrolling-navbar">
          <ul className=" navbar-nav mr-auto">
            <li className="nav-item">
              <NavbarBrand>
                <Link className="nav-link" to="/home">
                <img width="200 px"
              src="https://www.dropbox.com/s/3ndg09kniu85klz/Logo_Agile.png?raw=1"
              className="img-fluid"
            />
                </Link>
              </NavbarBrand>
            </li>
            </ul>
            <ul className="blue navbar-nav mr-auto">
            <li className="nav-item">
              <NavbarBrand>
                <Link className="nav-link" to="/assessment">
                  Assessment
                </Link>
              </NavbarBrand>
            </li>
            <li className="nav-item dropdown">
              <NavbarBrand>
                <Link className="nav-link" to="/training">
                  Training
                </Link>
              </NavbarBrand>
            </li>
            <li className="nav-item">
              <NavbarBrand>
                <Link className="nav-link" to="/coaching">
                  Coaching
                </Link>
              </NavbarBrand>
            </li>
            <li className="nav-item">
              <NavbarBrand>
                <Link className="nav-link" to="/resources">
                  Resources
                </Link>
              </NavbarBrand>
            </li>
            </ul>
            <ul className=" navbar-nav mr-auto float-right">
            <li className="nav-item">
            <MDBBtn href="#" color="blue">
                View Courses
            </MDBBtn>
            </li>
            <li className="nav-item">
              <NavbarBrand>
                <FontAwesomeIcon
                  icon={faFacebook}
                  style={{ color: "#4968AD" }}
                  size="2x"
                />
              </NavbarBrand>
            </li>
            <li className="nav-item">
              <NavbarBrand>
                <FontAwesomeIcon
                  icon={faLinkedin}
                  style={{ color: "#0073B0" }}
                  size="2x"
                />
              </NavbarBrand>
            </li>
            <li className="nav-item">
              <NavbarBrand>
                <FontAwesomeIcon
                  icon={faTwitter}
                  style={{ color: "#49A1EB" }}
                  size="2x"
                />
              </NavbarBrand>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/assessment">
            <AssessmentPage />
          </Route>
          <Route path="/training">
            <TrainingPage />
          </Route>
          <Route path="/coaching">
            <CoachingPage />
          </Route>
          <Route path="/resources">
            <TrainingPage />
          </Route>
          <Route path="/">
            <Homepage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
