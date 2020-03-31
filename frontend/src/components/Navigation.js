import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavbarBrand, MDBBtn } from "mdbreact";

import {
  faFacebook,
  faTwitter,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";
import { BrowserRouter as Router, Link } from "react-router-dom";

import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import Routes from "../Routes";
import Header from "./Header";

export default function Navigation() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setDropdownOpen(prevState => !prevState);

  return (
    <Router>
      <div>
        <div className="row">
          <nav className="navbar navbar-dark  fixed-top navbar-expand-lg scrolling-navbar">
            <ul className=" navbar-nav mr-auto">
              <NavbarBrand>
                <Link className="nav-link" to="/home">
                  <img
                    width="200 px"
                    src="https://www.dropbox.com/s/3ndg09kniu85klz/Logo_Agile.png?raw=1"
                    className="img-fluid"
                  />
                </Link>
              </NavbarBrand>
              <NavbarBrand>
                <li
                  className="nav-item btn"
                  style={{ backgroundColor: "#039be5" }}
                >
                  <Link className="nav-link " to="/assessment">
                    Assessment
                  </Link>
                </li>
              </NavbarBrand>
              <NavbarBrand>
                <li
                  className="nav-item btn"
                  style={{ backgroundColor: "#039be5" }}
                >
                  <Link className="nav-link" to="/training">
                    Training
                  </Link>
                </li>
              </NavbarBrand>

              <NavbarBrand>
                <li
                  className="nav-item btn"
                  style={{ backgroundColor: "#039be5" }}
                >
                  <Link className="nav-link" to="/coaching">
                    Coaching
                  </Link>
                </li>
              </NavbarBrand>

              <NavbarBrand>
                <UncontrolledDropdown
                  nav
                  inNavbar
                  isOpen={dropdownOpen}
                  toggle={toggleDropdown}
                >
                  <DropdownToggle
                    style={{ backgroundColor: "#039be5" }}
                    className="btn"
                    caret
                  >
                    Resources
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem>
                      <Link className="text-dark nav-link" to="/register">
                        Register
                      </Link>
                    </DropdownItem>

                    <DropdownItem className="nav-link">
                      {" "}
                      <Link className="text-dark" to="/training">
                        Upcoming Courses
                      </Link>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </NavbarBrand>
              <SocialMedia />
            </ul>
          </nav>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="row">
          <Header />
        </div>
        <Routes />
      </div>
    </Router>
  );
}

function SocialMedia() {
  return (
    <div className="col">
      <MDBBtn href="#" style={{ backgroundColor: "#039be5" }}>
        <Link className="text-dark" to="/training">
          View Courses
        </Link>
      </MDBBtn>
      <div className="row">
        <div className="col">
          <li className="nav-item">
            <NavbarBrand>
              <FontAwesomeIcon
                icon={faFacebook}
                style={{ color: "#4968AD" }}
                size="2x"
              />
            </NavbarBrand>
          </li>
        </div>

        <div className="col">
          <li className="nav-item">
            <NavbarBrand>
              <FontAwesomeIcon
                icon={faLinkedin}
                style={{ color: "#0073B0" }}
                size="2x"
              />
            </NavbarBrand>
          </li>
        </div>

        <div className="col">
          <li className="nav-item">
            <NavbarBrand>
              <FontAwesomeIcon
                icon={faTwitter}
                style={{ color: "#49A1EB" }}
                size="2x"
              />
            </NavbarBrand>
          </li>
        </div>
      </div>
    </div>
  );
}
