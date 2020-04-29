import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter, NavbarBrand } from "mdbreact";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { BrowserRouter as Router, Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
const Footer = () => {
  const blue = { backgroundColor: "light blue" };
  const List = styled.ul`
    overflow-x: auto;
    list-style: none;
    white-space: nowrap;
    padding: 0;
  `;
  const ListItem = styled.li`
    display: inline-block;
    padding: 8px 16px;
    margin-right: 16px;
  `;
  return (
    // grey-lighten-2 // header: light blue
    <MDBFooter color="" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="4">
            <img
              width="200 px"
              src="https://www.dropbox.com/s/3ndg09kniu85klz/Logo_Agile.png?raw=1"
              className="img-fluid"
            />
          </MDBCol>
          <MDBCol md="4">
            <h5 className="title">Related Links:</h5>
            <ul>
              <li className="list-unstyled">
				<Link to="/aboutus">About Us</Link>
              </li>

              <Link to="/contactus">Contact Us</Link>
              <li className="list-unstyled">
			  <Link to="/contactus" >Become A Trainer
			  </Link>
              </li>
              <li className="list-unstyled">
			  <Link to="/termsandconditions" >Terms and Conditions
			</Link> 
			  </li>
            </ul>
          </MDBCol>
          <MDBCol md="4">
            <List>
              <ListItem>
                <NavbarBrand>
                  <FontAwesomeIcon
                    icon={faFacebook}
                    style={{ color: "#4968AD" }}
                    size="2x"
                  />
                </NavbarBrand>
              </ListItem>
              <ListItem>
                <NavbarBrand>
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    style={{ color: "#0073B0" }}
                    size="2x"
                  />
                </NavbarBrand>
              </ListItem>
              <ListItem>
                <NavbarBrand>
                  <FontAwesomeIcon
                    icon={faTwitter}
                    style={{ color: "#49A1EB" }}
                    size="2x"
                  />
                </NavbarBrand>
              </ListItem>
            </List>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBFooter>
  );
};

export default Footer;
