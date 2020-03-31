import React from "react";
import {
  MDBCarousel,
  MDBCarouselCaption,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBMask,
  MDBContainer,
  MDBBtn
} from "mdbreact";

const style = {
  height: "400px",
  width: "100%"
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
                style={style}
                className="d-block w-100"
                src="https://www.dropbox.com/s/1tjax3x4ot8wdy2/Scrolling%20Image_About%20Us.jpg?raw=1"
                alt="First slide"
              />
              <MDBMask overlay="black-light" />
            </MDBView>
            <MDBCarouselCaption>
              <h3 className="h3-responsive">About Us</h3>
              <p>Who we are? </p>
              <p>What we do? </p>
              <MDBBtn color="primary">Collaborate</MDBBtn>
            </MDBCarouselCaption>
            
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <img
                style={style}
                className="d-block w-100"
                src="https://www.dropbox.com/s/z2u1fduke8su34b/Scrolling%20Image_Assessment.jpg?raw=1"
                alt="Second slide"
              />
              <MDBMask overlay="black-strong" />
            </MDBView>
            <MDBCarouselCaption>
              <h3 className="h3-responsive">Assessment</h3>
              <MDBBtn color="primary">Schedule An Assessment</MDBBtn>
            </MDBCarouselCaption>
          </MDBCarouselItem>

          <MDBCarouselItem itemId="3">
            <MDBView>
              <img
                style={style}
                className="d-block w-100"
                src="https://www.dropbox.com/s/f73ugandms4f7zx/Scrolling%20Image_Coaching.jpg?raw=1"
                alt="Third slide"
              />
              <MDBMask overlay="black-slight" />
            </MDBView>
            <MDBCarouselCaption>
              <h3 className="h3-responsive">Courses</h3>
              <MDBBtn color="primary">Schedule An Assessment</MDBBtn>
            </MDBCarouselCaption>
          </MDBCarouselItem>

          <MDBCarouselItem itemId="4">
            <MDBView>
              <img
                style={style}
                className="d-block w-100"
                src="https://www.dropbox.com/s/z9msg55fpn5n6z5/Scrolling%20Image_Courses.jpg?raw=1"
                alt="Fourth slide"
              />
              <MDBMask overlay="black-slight" />
            </MDBView>
            <MDBCarouselCaption>
              <h3 className="h3-responsive">Coaching</h3>
              <MDBBtn color="primary">Our Offerings</MDBBtn>
            </MDBCarouselCaption>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </div>
  );
};

export default Header;
