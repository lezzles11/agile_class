import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  NavbarBrand,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
} from "mdbreact";

import {
  faFacebook,
  faTwitter,
  faLinkedin,
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
  NavLink,
} from "reactstrap";

import Header from "./Header";
const style = {
  height: "70px",
  width: "200px",
  fontSize: "15px",
};

function TrainingDropdown() {
  return (
    <MDBDropdown style={style}>
      <MDBDropdownToggle style={style} caret color="primary">
        <h6>Training</h6>
      </MDBDropdownToggle>
      <MDBDropdownMenu basic>
        <MDBDropdownItem>
          {" "}
          <Link className="text-dark nav-link" to="/training">
            Public
          </Link>
        </MDBDropdownItem>
        <MDBDropdownItem>
          {" "}
          <Link className="text-dark nav-link" to="/training">
            Corporate
          </Link>
        </MDBDropdownItem>
        <MDBDropdownItem>
          {" "}
          <Link className="text-dark nav-link" to="/upcoming">
            Upcoming Courses
          </Link>
        </MDBDropdownItem>
      </MDBDropdownMenu>
    </MDBDropdown>
  );
}

function ResourcesDropdown() {
  return (
    <MDBDropdown style={style}>
      <MDBDropdownToggle style={style} caret color="primary">
        <h6>Resources</h6>
      </MDBDropdownToggle>
      <MDBDropdownMenu basic>
        <MDBDropdownItem>
          <Link className="text-dark nav-link" to="/aboutus">
            About Us
          </Link>
        </MDBDropdownItem>
        <MDBDropdownItem>
          {" "}
          <Link className="text-dark nav-link" to="/contactus">
            Contact Us
          </Link>
        </MDBDropdownItem>
      </MDBDropdownMenu>
    </MDBDropdown>
  );
}

function ButtonLink({ to, text }) {
  return (
    <MDBBtn style={style} color="primary">
      <Link className="nav-link" to={to}>
        <h6 style={{ color: "white" }}>{text}</h6>
      </Link>
    </MDBBtn>
  );
}
export default function Navigation() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setDropdownOpen((prevState) => !prevState);

  return (
    <Navbar>
      <nav className="white navbar fixed-top navbar-expand-lg scrolling-navbar">
        <ul className=" navbar-nav mr-auto">
          {" "}
          <Link className="nav-link" to="/">
            <img
              width="200 px"
              src="https://www.dropbox.com/s/3ndg09kniu85klz/Logo_Agile.png?raw=1"
              className="img-fluid"
            />
          </Link>
          
        </ul>
		<div className="row"></div>
	
        <ul className="navbar-nav mr-auto">
		<div className="row">
	
		<ButtonLink to="/assessment" text="Assessment" />
          <NavItem>
            <TrainingDropdown />
          </NavItem>
          <ButtonLink to="/coaching" text="Coaching" />
          <NavItem>
            <ResourcesDropdown />
          </NavItem>
		  </div>
		  </ul>
		  <div>
		  <ul className="navbar-nav mr-auto justify-content-end">
          <SocialMedia />
        </ul>
		</div>
      </nav>
    </Navbar>
  );
}
const style2 = {
	height: "70px",
	width: "170px",
	fontSize: "10px",
	padding: "1px"
  };
function RoundedButton({ to, text }) {
	return (
	  <MDBBtn style={style2} className="btn-rounded" color="primary">
		<Link className="nav-link" to={to}>
		  <h6 style={{ color: "white" }}>{text}</h6>
		</Link>
	  </MDBBtn>
	);
  }
function SocialMedia() {
  return (
    <div className="col">
      <div className="row">
        <div className="col"></div>

        <div className="col"></div>

        <div className="col">
          <Link to="/login"> Login</Link>
        </div>
      </div>
      <RoundedButton to="/upcoming" text="View Courses" />
      <div className="row">
        <div className="col">
          {"  "}
          {"    "}
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
