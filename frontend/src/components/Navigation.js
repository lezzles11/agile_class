import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  NavbarBrand,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem
} from "mdbreact";

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
  DropdownItem,
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

import Header from "./Header";
const style = {
  height: "70px",
  width: "100%"
};

function ButtonLink({ to, text }) {
  return (
    <NavItem>
      <DropdownToggle className="white" style={style}>
        <Link className="nav-link" to={to}>
          <h6 style={{ color: "white" }}>{text}</h6>
        </Link>
      </DropdownToggle>
    </NavItem>
  );
}
export default function Navigation() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setDropdownOpen(prevState => !prevState);

  return (
    <Navbar>
      <nav className="white navbar fixed-top navbar-expand-lg scrolling-navbar">
        <ul className=" navbar-nav mr-auto">
          <NavbarBrand>
            {" "}
            <Link className="nav-link" to="/">
              <img
                width="200 px"
                src="https://www.dropbox.com/s/3ndg09kniu85klz/Logo_Agile.png?raw=1"
                className="img-fluid"
              />
            </Link>
          </NavbarBrand>

          <ButtonLink to="/assessment" text="Assessment" />

          <ButtonLink to="/training" text="Training" />

          <ButtonLink to="/coaching" text="Coaching" />
          <NavItem>
            <UncontrolledDropdown
              nav
              inNavbar
              isOpen={dropdownOpen}
              toggle={toggleDropdown}
            >
              <DropdownToggle style={style} className="btn" caret>
                <h6 style={{ color: "white" }}>Resources</h6>
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>
                  <Link className="text-dark nav-link" to="/register">
                    Register
                  </Link>
                </DropdownItem>

                <DropdownItem>
                  {" "}
                  <Link className="text-dark nav-link" to="/upcoming">
                    Upcoming Courses
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  {" "}
                  <Link className="text-dark nav-link" to="/login">
                    Login
                  </Link>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </NavItem>
          <SocialMedia />
        </ul>
      </nav>
    </Navbar>
  );
}

function SocialMedia() {
  return (
    <div className="col">
      <ButtonLink to="/training" text="View Courses" />
      <div className="row">
        <div className="col">
          <li className="nav-item">
            <NavItem>
              <a target="_blank" href="www.twitter.com">
                <FontAwesomeIcon
                  icon={faFacebook}
                  style={{ color: "#4968AD" }}
                  size="2x"
                />
              </a>
            </NavItem>
          </li>
        </div>

        <div className="col">
          <li className="nav-item">
            <NavItem>
              <a href="www.linkedin.com">
                <FontAwesomeIcon
                  icon={faLinkedin}
                  style={{ color: "#0073B0" }}
                  size="2x"
                />
              </a>
            </NavItem>
          </li>
        </div>

        <div className="col">
          <li className="nav-item">
            <NavItem>
              <a href="www.twitter.com">
                <FontAwesomeIcon
                  icon={faTwitter}
                  style={{ color: "#49A1EB" }}
                  size="2x"
                />
              </a>
            </NavItem>
          </li>
        </div>
      </div>
    </div>
  );
}
