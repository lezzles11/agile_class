import React from "react";
import {
  MDBCarousel,
  MDBCarouselCaption,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBMask,
  MDBContainer,
  MDBBtn,
} from "mdbreact";
import { BrowserRouter as Router, Link } from "react-router-dom";

const style = {
  height: "100%",
  width: "100%",
};
const Header = () => {
  return (
    <div style={style}>
      <MDBCarousel
        activeItem={1}
        length={4}
        showControls={true}
        showIndicators={true}
        className="z-depth-1"
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView style={style}>
              {" "}
              <img
                className="img-fluid"
                src="https://www.dropbox.com/s/3s1n1ae2ul5r9je/header3.png?raw=1"
                alt="First slide"
              />
              <MDBMask overlay="black-light" />
            </MDBView>
            <MDBCarouselCaption>
              <h3 className="h3-responsive">About Us</h3>
              <p>Who We Are</p>
              <p>What We Do</p>
              <Link className="nav-link" to="/coaching">
                <MDBBtn color="primary">Collaborate</MDBBtn>
              </Link>
            </MDBCarouselCaption>
          </MDBCarouselItem>

          <MDBCarouselItem itemId="2">
            <MDBView style={style}>
              <img
                style={style}
                className="img-fluid"
                src="https://www.dropbox.com/s/dwc10ziv3bj7qia/Agile1.png?raw=1"
                alt="Second slide"
              />
              <MDBMask overlay="black-strong" />
            </MDBView>
            <MDBCarouselCaption>
              <h3 className="h3-responsive">Assessment</h3>
              <Link className="nav-link" to="/assessment">
                <MDBBtn color="primary">Schedule An Assessment</MDBBtn>
              </Link>
            </MDBCarouselCaption>
          </MDBCarouselItem>

          <MDBCarouselItem itemId="3">
            <MDBView style={style}>
              <img
                style={style}
                className="img-fluid"
                src="https://www.dropbox.com/s/c5t1mpn72qlodgg/Trello.png?raw=1"
                alt="Third slide"
              />
              <MDBMask overlay="black-slight" />
            </MDBView>
            <MDBCarouselCaption>
              <h3 className="h3-responsive">Courses</h3>
              <Link className="nav-link" to="/training">
                <MDBBtn color="primary">See Courses</MDBBtn>
              </Link>
            </MDBCarouselCaption>
          </MDBCarouselItem>

          <MDBCarouselItem itemId="4">
            <MDBView style={style}>
              <img
                style={style}
                className="img-fluid"
                src="https://www.dropbox.com/s/z5rfhnzc2y0jm0f/header2.png?raw=1"
                alt="Fourth slide"
              />
              <MDBMask overlay="black-slight" />
            </MDBView>
            <MDBCarouselCaption>
              <h3 className="h3-responsive">Coaching</h3>
              <Link className="nav-link" to="/coaching">
                <MDBBtn color="primary">Our Offerings</MDBBtn>
              </Link>
            </MDBCarouselCaption>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </div>
  );
};

export default Header;
