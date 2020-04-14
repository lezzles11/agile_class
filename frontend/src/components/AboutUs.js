import React from "react";
import {
  MDBJumbotron,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBCardBody,
  MDBCardText,
} from "mdbreact";
import { BrowserRouter as Router, Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <MDBContainer className="mt-5 text-center">
      <MDBRow>
        <MDBCol md="4">
          <MDBRow>
            <Link className="text-dark nav-link" to="/aboutus">
              <MDBBtn color="blue">Who We Are</MDBBtn>
            </Link>
          </MDBRow>
          <MDBRow>
            <Link className="text-dark nav-link" to="/aboutus">
              <MDBBtn color="blue">What We Do</MDBBtn>
            </Link>
          </MDBRow>
          <MDBRow>
            <Link className="text-dark nav-link" to="/contactus">
              <MDBBtn color="blue">Contact Us</MDBBtn>
            </Link>
          </MDBRow>
        </MDBCol>
        <MDBCol>
          <MDBJumbotron fluid>
            <MDBContainer>
              <MDBCardBody>
                <MDBCardText>
                  Agile Dynamix is passionate about providing top notch
                  training, coaching, and maturity assessments to help you and
                  your company rise in your industry. Whether you are an
                  individual looking to sharpen your skills by earning a
                  certification, or a CEO interested in a maturity assessment
                  for your organization, we have the expertise, experience, and
                  guidance to help you grow in the market.
                </MDBCardText>
                <MDBBtn href="#" color="indigo" class="float-right" rounded>
                  <a href="/aboutus">more</a>
                </MDBBtn>
              </MDBCardBody>
            </MDBContainer>
          </MDBJumbotron>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default AboutUs;
