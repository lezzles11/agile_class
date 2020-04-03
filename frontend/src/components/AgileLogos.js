import React from "react";
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
  MDBMask
} from "mdbreact";

const AgileLogos = ({ title, subtitle, button1 }) => {
  return (
    <MDBContainer className="mt-5 text-center">
      <MDBRow>
        <MDBCol>
          <MDBView hover className="rounded z-depth-1-half mb-lg-0 mb-4">
            <div className="card-body">
              <img
                className="img-fluid"
                src="https://www.dropbox.com/s/qcawzw73pxq48bo/SAFE%20logo.png?raw=1"
                alt=""
              />
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </div>
          </MDBView>
        </MDBCol>
        <MDBCol>
          <MDBView hover className="rounded z-depth-1-half mb-lg-0 mb-4">
            <div className="card-body">
              <img
                className="img-fluid"
                src="https://www.dropbox.com/s/zlw6a9h0hvv55gq/scrumalliance.1.png?raw=1"
                alt=""
              />
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </div>
          </MDBView>
        </MDBCol>
        <MDBCol>
          <MDBView hover className="rounded z-depth-1-half mb-lg-0 mb-4">
            <div className="card-body">
              <img
                className="img-fluid"
                src="https://www.dropbox.com/s/bc3y8ac5t0nw69s/scrum-org.png?raw=1"
                alt=""
              />
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
