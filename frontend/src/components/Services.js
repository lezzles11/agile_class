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
  MDBBtn
} from "mdbreact";

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
              <MDBCardImage
                src="https://www.dropbox.com/s/22y8c0xvy7cis93/process.png?raw=1"
                className="img-fluid"
              />
            </div>
            <MDBCardBody>
              <MDBCardText>
                Looking for an Agile Maturity Assessment for your organization?
                Our experts at Dynamix Agile can deliver an assessment for your
                organization, regardless of your specific needs.
              </MDBCardText>
              <MDBBtn href="#" color="indigo" class="float-right" rounded>
                more
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
              <MDBCardImage
                src="https://www.dropbox.com/s/rvus2q503kfz4k3/Sprints.png?raw=1"
                className="img-fluid"
              />
            </div>
            <MDBCardBody>
              <MDBCardText>
                Our certified training courses can equip your teams with the top
                certifications in the market. Whether you are looking for a
                weekend training course for your entire organization, a team, or
                for individual growth, we can deliver the training you need.
              </MDBCardText>
              <MDBBtn href="#" color="indigo" class="float-right" rounded>
                more
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
              <MDBCardImage
                src="https://www.dropbox.com/s/9znvi8u6l5hvysj/agileprocess.png?raw=1"
                className="img-fluid"
              />
            </div>
            <MDBCardBody>
              <MDBCardText>
                Need individualized coaching? Our coaches deliver customized
                sessions according to your needs.
              </MDBCardText>
              <MDBBtn href="#" class="float-right" color="indigo" rounded>
                more
              </MDBBtn>
            </MDBCardBody>
          </MDBJumbotron>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Services;
