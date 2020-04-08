import React from "react";
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
  MDBCardText
} from "mdbreact";
import { BrowserRouter as Router, Link } from "react-router-dom";
const style = {
  height: "300px",
  width: "100%"
};
const Assessments = () => {
  return (
    <MDBContainer>
    <MDBCard className="my-5 px-5 pb-5">
      <MDBCardBody>
        <MDBRow>
          <MDBCol>
            <MDBView hover className="rounded z-depth-1-half mb-lg-0 mb-4" >
              <img style={style}
                className="img-fluid"
                src="https://www.dropbox.com/s/z2u1fduke8su34b/Scrolling%20Image_Assessment.jpg?raw=1"
                alt=""
              />
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
          </MDBCol>
          <MDBCol size='3' style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>
       <Link to='/contactus'><MDBBtn color="blue" > 
     Contact Us
      </MDBBtn></Link>
          </MDBCol>
        </MDBRow>
        <MDBRow className="mt-5">
        <MDBCol>
          <h6>Why Assessment?</h6>
          <MDBJumbotron style={{ padding: 0 }}>
            <MDBCol className="text-white text-center py-2 px-2 my-2" >
              <MDBCol className="py-2">
                <MDBCardText className="mx-2 mb-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </MDBCardText>
                </MDBCol>
            </MDBCol>
          </MDBJumbotron>
        </MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol>
          <h6>What are the different types of Assessment?</h6>
          <MDBJumbotron style={{ padding: 0 }}>
            <MDBCol className="text-white text-center py-2 px-2 my-2" >
              <MDBCol className="py-2">
                <MDBCardText className="mx-2 mb-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </MDBCardText>
                </MDBCol>
            </MDBCol>
          </MDBJumbotron>
        </MDBCol>
      </MDBRow>
      <MDBRow className="mb-5">
        <MDBCol>
          <ul>
          <li>
          <h6>Leadership Assessment</h6>
          <MDBJumbotron style={{ padding: 0 }}>
            <MDBCol className="text-white text-center py-2 px-2 my-2" >
              <MDBCol className="py-2">
                <MDBCardText className="mx-2 mb-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                </MDBCardText>
                </MDBCol>
            </MDBCol>
          </MDBJumbotron>
          </li>
          <li>
          <h6>Organization Assessment</h6>
          <MDBJumbotron style={{ padding: 0 }}>
            <MDBCol className="text-white text-center py-2 px-2 my-2" >
              <MDBCol className="py-2">
                <MDBCardText className="mx-2 mb-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                </MDBCardText>
                </MDBCol>
            </MDBCol>
          </MDBJumbotron>
          </li>
          <li>
          <h6>Portfolio Assessment</h6>
          <MDBJumbotron style={{ padding: 0 }}>
            <MDBCol className="text-white text-center py-2 px-2 my-2" >
              <MDBCol className="py-2">
                <MDBCardText className="mx-2 mb-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                </MDBCardText>
                </MDBCol>
            </MDBCol>
          </MDBJumbotron>
          </li>
          <li>
          <h6>Program Assessment</h6>
          <MDBJumbotron style={{ padding: 0 }}>
            <MDBCol className="text-white text-center py-2 px-2 my-2" >
              <MDBCol className="py-2">
                <MDBCardText className="mx-2 mb-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                </MDBCardText>
                </MDBCol>
            </MDBCol>
          </MDBJumbotron>
          </li>
          <li>
          <h6>Team Assessment</h6>
          <MDBJumbotron style={{ padding: 0 }}>
            <MDBCol className="text-white text-center py-2 px-2 my-2" >
              <MDBCol className="py-2">
                <MDBCardText className="mx-2 mb-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                </MDBCardText>
                </MDBCol>
            </MDBCol>
          </MDBJumbotron>
          </li>
          <li>
          <h6>Individual role/talent</h6>
          <MDBJumbotron style={{ padding: 0 }}>
            <MDBCol className="text-white text-center py-2 px-2 my-2" >
              <MDBCol className="py-2">
                <MDBCardText className="mx-2 mb-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                </MDBCardText>
                </MDBCol>
            </MDBCol>
          </MDBJumbotron>
          </li>
          </ul>
        </MDBCol>
      </MDBRow>
      <MDBRow style={{
        position: 'absolute', left: '50%', 
        transform: 'translate(-50%, -50%)'
    }}>
       <Link to='/contactus'><MDBBtn color="blue" > 
     Contact Us
      </MDBBtn></Link>
      </MDBRow>
      </MDBCardBody>
    </MDBCard>
    
    </MDBContainer>
  );
};

export default Assessments;
