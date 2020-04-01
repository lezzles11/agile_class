import React from "react";
import {
  MDBJumbotron,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBCardBody,
  MDBCardText
} from "mdbreact";

const AboutUsPage = () => {
  return (
    <MDBContainer className="mt-5 text-center">
      <MDBRow>
        <MDBCol md="4">
          <MDBRow>
            <MDBBtn color="blue">Who we are</MDBBtn>
          </MDBRow>
          <MDBRow>
            <MDBBtn color="blue">What we do</MDBBtn>
          </MDBRow>
          <MDBRow>
            <MDBBtn color="blue">Contact us</MDBBtn>
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
                  more
                </MDBBtn>
              </MDBCardBody>
            </MDBContainer>
          </MDBJumbotron>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default AboutUsPage;
