import React from "react";

import img_Coaching from "assets/img_Coaching.png";

import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBMask,
  MDBIcon,
  MDBView,
  MDBBtn,
  MDBContainer,
  MDBJumbotron,
  MDBCardText,
} from "mdbreact";
import { BrowserRouter as Router, Link } from "react-router-dom";
const style = {
  height: "300px",
  width: "100%",
};
const Coaching = () => {
  return (
    <MDBContainer>
      <MDBCard className="my-5 px-5 pb-5">
        <MDBCardBody>
          <MDBRow>
            <MDBCol>
              <MDBView hover className="rounded z-depth-1-half mb-lg-0 mb-4">
                <img
                  style={style}
                  className="img-fluid"
                  src={img_Coaching}
                  alt=""
                />
                <a href="#!">
                  <MDBMask overlay="white-slight" />
                </a>
              </MDBView>
            </MDBCol>
          </MDBRow>
          <MDBRow className="mt-5">
            <MDBCol>
              <h6 align="center">Agile Transformation</h6>
              <MDBJumbotron style={{ padding: 0 }}>
                <MDBCol className="text-white text-center py-2 px-2 my-2">
                  <MDBCol className="py-2">
                    <MDBCardText className="mx-2 mb-2">
                      Want to introduce the power of Agile to your organization?
                      Our coaches can work with your teams to bring them up to
                      speed. We will define the roles and responsibilities of
                      the various team members and stakeholders, assist with
                      implementing Agile practices including Scrum, Kanban and
                      Lean, and help to position your group into moving ahead on
                      your own. With our help, you will be able to strengthen
                      your organization and help your teams grow in
                      connectivity, continuous development, and success.
                    </MDBCardText>
                  </MDBCol>
                </MDBCol>
              </MDBJumbotron>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol>
              <h6 align="center">Devops Transformation</h6>
              <MDBJumbotron style={{ padding: 0 }}>
                <MDBCol className="text-white text-center py-2 px-2 my-2">
                  <MDBCol className="py-2">
                    <MDBCardText className="mx-2 mb-2">
                      Combining both software development and operations, an
                      Agile DevOps environment maximizes productivity by
                      coordinating a shared vision. This enables your
                      organization to cooperate on a common set of tools and
                      practices, from planning to maintenance.
                    </MDBCardText>
                  </MDBCol>
                </MDBCol>
              </MDBJumbotron>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol>
              <h6 align="center">Tools Assessment &#38; Implementation</h6>
              <MDBJumbotron style={{ padding: 0 }}>
                <MDBCol className="text-white text-center py-2 px-2 my-2">
                  <MDBCol className="py-2">
                    <MDBCardText className="mx-2 mb-2">
                      Agile is a set of principles – there are a plethora of
                      tools available, but which ones are best for your specific
                      needs and goals? With this coaching session, we help you
                      assess your current toolset and your organization’s
                      strengths and challenges, and we assemble a collection of
                      tools specific to your requirements. Our tools assessment
                      will leave you equipped with new tools that will enable
                      your team or organization to improve successful delivery
                      of products and projects.
                    </MDBCardText>
                  </MDBCol>
                </MDBCol>
              </MDBJumbotron>
            </MDBCol>
          </MDBRow>
          <MDBRow
            className="mt-2"
            style={{
              position: "absolute",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <Link to="/contactus">
              <MDBBtn color="blue">Contact Us</MDBBtn>
            </Link>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
};

export default Coaching;
