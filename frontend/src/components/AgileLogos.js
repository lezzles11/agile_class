import React from "react";

import SAFe from "assets/SAFe.jpg";
import scrumalliance2 from "assets/scrumalliance2.png";
import scrum from "assets/scrum.jpg";

import {
  MDBJumbotron,
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBCardBody,
  MDBCardText,
  MDBCardTitle,
  MDBView,
  MDBMask,
} from "mdbreact";

const AgileLogos = ({ title, subtitle, button1 }) => {
  return (
    <MDBContainer className="mt-5 text-center">
      <MDBRow>
        <MDBCol>
          <MDBView hover className="rounded z-depth-1-half mb-lg-0 mb-4">
            <div className="card-body">
              <img className="img-fluid" src={SAFe} alt="" />
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </div>
          </MDBView>
        </MDBCol>
        <MDBCol>
          <MDBView hover className="rounded z-depth-1-half mb-lg-0 mb-4">
            <div className="card-body">
              <img className="img-fluid" src={scrumalliance2} alt="" />
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </div>
          </MDBView>
        </MDBCol>
        <MDBCol>
          <MDBView hover className="rounded z-depth-1-half mb-lg-0 mb-4">
            <div className="card-body">
              <img className="img-fluid" src={scrum} alt="" />
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </div>
          </MDBView>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default AgileLogos;
