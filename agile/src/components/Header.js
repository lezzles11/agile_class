import React from "react";
import {
  MDBCarousel,
  MDBCarouselCaption,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBMask,
  MDBContainer
} from "mdbreact";

const style = {
  height: "600px",
  width: "100%"
};
const Header = () => {
  return (
    <div style={style}>
      <MDBCarousel
        activeItem={1}
        length={3}
        showControls={true}
        showIndicators={true}
        className="z-depth-1"
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView style={style}>
              {" "}
              <img
                style={style}
                className="d-block w-100"
                src="https://www.dropbox.com/s/b8oc7cs3m0gq49k/AdobeStock_303430811.jpeg?raw=1"
                alt="First slide"
              />
              <MDBMask overlay="black-light" />
            </MDBView>
            <MDBCarouselCaption>
              <h3 className="h3-responsive">About Us</h3>
              <p>Who Are We? </p>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <img
                style={style}
                className="d-block w-100"
                src="https://www.dropbox.com/s/b8oc7cs3m0gq49k/AdobeStock_303430811.jpeg?raw=1"
                alt="Second slide"
              />
              <MDBMask overlay="black-strong" />
            </MDBView>
            <MDBCarouselCaption>
              <h3 className="h3-responsive">Assessment</h3>
              <p>Course </p>
            </MDBCarouselCaption>
          </MDBCarouselItem>

          <MDBCarouselItem itemId="3">
            <MDBView>
              <img
                style={style}
                className="d-block w-100"
                src="https://www.dropbox.com/s/b8oc7cs3m0gq49k/AdobeStock_303430811.jpeg?raw=1"
                alt="Third slide"
              />
              <MDBMask overlay="black-slight" />
            </MDBView>
            <MDBCarouselCaption>
              <h3 className="h3-responsive">Course</h3>
              <p>Third text</p>
            </MDBCarouselCaption>
          </MDBCarouselItem>

          <MDBCarouselItem itemId="4">
            <MDBView>
              <img
                style={style}
                className="d-block w-100"
                src="https://www.dropbox.com/s/b8oc7cs3m0gq49k/AdobeStock_303430811.jpeg?raw=1"
                alt="Fourth slide"
              />
              <MDBMask overlay="black-slight" />
            </MDBView>
            <MDBCarouselCaption>
              <h3 className="h3-responsive">Coaching</h3>
              <p>Third text</p>
            </MDBCarouselCaption>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </div>
  );
};

export default Header;
