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
const Coaching = () => {
  return (
    <MDBContainer>
    <MDBCard className="my-5 px-5 pb-5">
      <MDBCardBody>
        <MDBRow>
          <MDBCol>
            <MDBView hover className="rounded z-depth-1-half mb-lg-0 mb-4" >
              <img style={style}
                className="img-fluid"
                src="https://www.dropbox.com/s/cbj08bg5oycfki3/Screen%20Shot%202020-03-28%20at%2010.41.19%20PM.png?raw=1"
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
          <h6>Agile Transformation</h6>
          <MDBJumbotron style={{ padding: 0 }}>
            <MDBCol className="text-white text-center py-2 px-2 my-2" >
              <MDBCol className="py-2">
                <MDBCardText className="mx-2 mb-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </MDBCardText>
                </MDBCol>
            </MDBCol>
          </MDBJumbotron>
        </MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol>
          <h6>Devops Transformation</h6>
          <MDBJumbotron style={{ padding: 0 }}>
            <MDBCol className="text-white text-center py-2 px-2 my-2" >
              <MDBCol className="py-2">
                <MDBCardText className="mx-2 mb-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </MDBCardText>
                </MDBCol>
            </MDBCol>
          </MDBJumbotron>
        </MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol>
          <h6>Tools Assessment &#38; Implementation</h6>
          <MDBJumbotron style={{ padding: 0 }}>
            <MDBCol className="text-white text-center py-2 px-2 my-2" >
              <MDBCol className="py-2">
                <MDBCardText className="mx-2 mb-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </MDBCardText>
                </MDBCol>
            </MDBCol>
          </MDBJumbotron>
        </MDBCol>
      </MDBRow>
      <MDBRow className="mt-2" style={{
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

export default Coaching;
