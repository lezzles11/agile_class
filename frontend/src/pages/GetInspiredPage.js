import React from "react";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText
} from "mdbreact";

const GetInspiredPage = () => {
  return (
    <MDBContainer>
      <MDBCarousel
        activeItem={1}
        length={2}
        slide={true}
        showControls={true}
        showIndicators={true}
        multiItem
      >
        <MDBCarouselInner>
          <MDBRow>
            <MDBCarouselItem itemId="1">
              <MDBCol md="4">
                <MDBCard className="mb-2">
                  <MDBCardImage
                    style={{ width: "15rem" }}
                    className="img-fluid"
                    src="https://www.dropbox.com/s/ax4s1mv90qqshg2/Page%203_Instructor%202.jpg?raw=1"
                  />
                  <MDBCardBody>
                    <MDBCardTitle>Maturity Assessment</MDBCardTitle>
                    <MDBCardText>
                      The Agile Maturity Assessment gave our company the
                      knowledge we needed to improve in our industry
                    </MDBCardText>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol md="4">
                <MDBCard className="mb-2">
                  <MDBCardImage
                    style={{ width: "15rem" }}
                    className="img-fluid"
                    src="https://www.dropbox.com/s/c1fhv8ck278cg8b/Page%203_Instructor%201.jpg?raw=1"
                  />
                  <MDBCardBody>
                    <MDBCardTitle>Training</MDBCardTitle>
                    <MDBCardText>
                      The training provided by Agile Dynamix gave me the
                      certification I needed to grow in my field
                    </MDBCardText>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol md="4">
                <MDBCard className="mb-2">
                  <MDBCardImage
                    style={{ width: "15rem" }}
                    className="img-fluid"
                    src="https://www.dropbox.com/s/856v4ls4lyz4uhz/P_1.jpg?raw=1"
                  />
                  <MDBCardBody>
                    <MDBCardTitle>Knowledgeable Coaches</MDBCardTitle>
                    <MDBCardText>
                      Fantastic coaching! Knowledgeable coaches, inspiring, and
                      able to meet my team’s needs!
                    </MDBCardText>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="2">
              <MDBCol md="4">
                <MDBCard className="mb-2">
                  <MDBCardImage
                    style={{ width: "15rem" }}
                    className="img-fluid"
                    src="https://www.dropbox.com/s/745e5th2bepkvbs/Screen%20Shot%202020-03-09%20at%202.14.11%20AM.png?raw=1"
                  />
                  <MDBCardBody>
                    <MDBCardTitle>Knowledgeable Coaches</MDBCardTitle>
                    <MDBCardText>
                      Fantastic coaching! Knowledgeable coaches, inspiring, and
                      able to meet my team’s needs!
                    </MDBCardText>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol md="4">
                <MDBCard className="mb-2">
                  <MDBCardImage
                    style={{ width: "15rem" }}
                    className="img-fluid"
                    src="https://www.dropbox.com/s/4pg8sb90nf08e62/Screen%20Shot%202020-03-09%20at%202.14.18%20AM.png?raw=1"
                  />
                  <MDBCardBody>
                    <MDBCardTitle>Training</MDBCardTitle>
                    <MDBCardText>
                      The training provided by Agile Dynamix gave me the
                      certification I needed to grow in my field
                    </MDBCardText>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol md="4">
                <MDBCard className="mb-2">
                  <MDBCardImage
                    style={{ width: "15rem" }}
                    className="img-fluid"
                    src="https://www.dropbox.com/s/zda2kr86svwz4ie/Screen%20Shot%202020-03-09%20at%202.15.12%20AM.png?raw=1"
                  />
                  <MDBCardBody>
                    <MDBCardTitle>Maturity Assessment</MDBCardTitle>
                    <MDBCardText>
                      The Agile Maturity Assessment gave our company the
                      knowledge we needed to improve in our industry
                    </MDBCardText>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBCarouselItem>
          </MDBRow>
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
  );
};

export default GetInspiredPage;
