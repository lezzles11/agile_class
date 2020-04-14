import React from "react";
import {
  MDBJumbotron,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBCardTitle,
  MDBCardImage,
  MDBCardBody,
  MDBCardText,
  MDBBtn,
} from "mdbreact";
import OurServicesAssessment from "assets/OurServicesAssessment.png";
import OurServicesCoaching from "assets/OurServicesCoaching.png";
import OurServicesTraining from "assets/OurServicesTraining.png";

const Services = () => {
  return (
    <MDBContainer className="mt-5 text-center">
      <MDBRow>
        <MDBCol>
          <MDBJumbotron className="text-center">
            <MDBCardTitle className="card-title h4 pb-2">
              <h3>
                {" "}
                <strong>Assessment</strong>
              </h3>
            </MDBCardTitle>
            <div className="container">
              <MDBCardImage src={OurServicesAssessment} className="img-fluid" />
            </div>
            <MDBCardBody>
              <MDBCardText>
                Looking for an Agile Maturity Assessment for your organization?
                Our experts at Dynamix Agile can deliver an assessment for your
                organization.
              </MDBCardText>

              <MDBBtn href="#" color="indigo" class="float-right" rounded>
                <a href="/assessment">more</a>
              </MDBBtn>
            </MDBCardBody>
          </MDBJumbotron>
        </MDBCol>
        <MDBCol>
          <MDBJumbotron className="text-center">
            <MDBCardTitle className="card-title h4 pb-2">
              <h3>
                {" "}
                <strong>Training</strong>
              </h3>
            </MDBCardTitle>

            <div className="container">
              <MDBCardImage src={OurServicesTraining} className="img-fluid" />
            </div>
            <MDBCardBody>
              <MDBCardText>
                Do you need to get a specific certification to help you improve
                in your industry? Our certified training courses will prepare
                you to pass and gain top certifications in the market.
              </MDBCardText>
              <MDBBtn href="#" color="indigo" class="float-right" rounded>
                <a href="/training">more</a>
              </MDBBtn>
            </MDBCardBody>
          </MDBJumbotron>
        </MDBCol>
        <MDBCol>
          <MDBJumbotron className="text-center">
            <MDBCardTitle className="card-title h4 pb-2">
              <h3>
                {" "}
                <strong>Coaching</strong>
              </h3>
            </MDBCardTitle>
            <div className="container">
              <MDBCardImage src={OurServicesCoaching} className="img-fluid" />
            </div>
            <MDBCardBody>
              <MDBCardText>
                Are you in need of individualized coaching to improve your
                skills and those of your team? Our coaches deliver customized
                sessions to help you increase successful delivery.
              </MDBCardText>
              <MDBBtn href="#" class="float-right" color="indigo" rounded>
                <a href="/coaching">more</a>
              </MDBBtn>
            </MDBCardBody>
          </MDBJumbotron>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Services;
