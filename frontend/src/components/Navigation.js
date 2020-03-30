import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavbarBrand } from "mdbreact";

import {
  faFacebook,
  faTwitter,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Homepage from "../pages/Homepage";
import ContactUsPage from "../pages/ContactUsPage";
import CoachingPage from "../pages/CoachingPage";
import CoursePage from "../pages/CoursePage";
import RegisterPage from "../pages/RegisterPage";
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
        <nav className="light-blue navbar navbar-dark  fixed-top navbar-expand-lg scrolling-navbar">
          <ul className=" navbar-nav mr-auto">
            {/* TESTING  */}
            <li className="nav-item">
              <div className="light-blue">
                <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                  <DropdownToggle caret>Dropdown</DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem header>Header</DropdownItem>

                    <DropdownItem>
                      <Link className="text-dark nav-link" to="/training">
                        Some Action
                      </Link>
                    </DropdownItem>

                    <DropdownItem disabled>Action (disabled)</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem className="nav-link">
                      {" "}
                      <Link className="text-dark" to="/training">
                        Some Action
                      </Link>
                    </DropdownItem>
                    <DropdownItem>Bar Action</DropdownItem>
                    <DropdownItem>Quo Action</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </div>
            </li>

            {/* TESTING  */}

            <li className="nav-item">
              <NavbarBrand>
                <Link className="nav-link" to="/">
                  LOGO
                </Link>
              </NavbarBrand>
            </li>
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
            <RegisterPage />
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
