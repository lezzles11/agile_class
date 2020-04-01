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

const JumbotronPage = () => {
  return (
    <MDBContainer className="mt-5 text-center">
      <MDBRow>
        <MDBCol>
          <MDBJumbotron className="text-center">
            <MDBCardTitle className="card-title h4 pb-2">
              <strong>Assessment</strong>
            </MDBCardTitle>

            <MDBCardImage
              src="https://www.dropbox.com/s/t5ntzpk1o3fslbo/image003.png?raw=1"
              className="img-fluid"
            />
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
              <strong>Training</strong>
            </MDBCardTitle>

            <MDBCardImage
              src="https://www.dropbox.com/s/igufsmerstph56r/image008.png?raw=1"
              className="img-fluid"
            />
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
              <strong>Coaching</strong>
            </MDBCardTitle>

            <MDBCardImage
              src="https://www.dropbox.com/s/uxw52qawfg0k972/image012.png?raw=1"
              className="img-fluid"
            />
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

export default JumbotronPage;
