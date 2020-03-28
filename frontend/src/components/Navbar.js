import React from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavItem,
  MDBNavLink,
  MDBIcon
} from "mdbreact";
import { BrowserRouter as Router } from "react-router-dom";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse
    });
  }

  render() {
    const blue = { backgroundColor: "#33b5e5" };
    const white = { color: "white" };
    const container = { height: 1300 };
    return (
      <div
        style={blue}
        className="navbar navbar-expand-lg navbar-light lighten-5"
      >
        <a style={white} className="navbar-brand" href="#">
          Dynamix
        </a>
        <div className="collapse navbar-collapse" id="basicExampleNav">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a style={white} className="nav-link" href="#">
                Assessment
                <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a style={white} className="nav-link" href="#">
                Training
              </a>
            </li>
            <li className="nav-item">
              <a style={white} className="nav-link" href="#">
                Coaching
              </a>
            </li>
            <li className="nav-item dropdown multi-level-dropdown">
              <a
                style={white}
                href="#"
                id="menu"
                data-toggle="dropdown"
                className="nav-link dropdown-toggle w-100"
              >
                Resources
              </a>
              <ul className="dropdown-menu mt-2 rounded-0 primary-color border-0 z-depth-1">
                <li className="dropdown-item dropdown-submenu p-0">
                  <a
                    href="#"
                    data-toggle="dropdown"
                    className="dropdown-toggle text-white w-100"
                  >
                    Click Me Too!{" "}
                  </a>
                  <ul className="dropdown-menu ml-2 rounded-0 primary-color border-0 z-depth-1">
                    <li className="dropdown-item p-0">
                      <a href="#" className="text-white w-100">
                        Hey
                      </a>
                    </li>
                    <li className="dropdown-item p-0">
                      <a href="#" className="text-white w-100">
                        Hi
                      </a>
                    </li>
                    <li className="dropdown-item dropdown-submenu p-0">
                      <a
                        href="#"
                        data-toggle="dropdown"
                        className="dropdown-toggle text-white w-100"
                      >
                        Hello{" "}
                      </a>
                      <ul className="dropdown-menu mr-2 rounded-0 primary-color border-0 z-depth-1 r-100 ">
                        <li className="dropdown-item p-0">
                          <a href="#" className="text-white w-100">
                            Some
                          </a>
                        </li>
                        <li className="dropdown-item p-0">
                          <a href="#" className="text-white w-100">
                            Text
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="dropdown-item dropdown-submenu">
                  <a
                    href="#"
                    data-toggle="dropdown"
                    className="dropdown-toggle text-white w-100"
                  >
                    Click me{" "}
                  </a>
                  <ul className="dropdown-menu mr-2 rounded-0  primary-color border-0 z-depth-1 r-100 ">
                    <li className="dropdown-item p-0">
                      <a href="#" className="text-white w-100">
                        How
                      </a>
                    </li>
                    <li className="dropdown-item p-0">
                      <a href="#" className="text-white w-100">
                        are
                      </a>
                    </li>
                    <li className="dropdown-item p-0">
                      <a href="#" className="text-white w-100">
                        you{" "}
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <div style={white}>
          <form className="form-inline">
            <div className="md-form my-0">
              <input
                className="form-control mr-sm-2"
                type="text"
                placeholder="Search"
                aria-label="Search"
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Navbar;
