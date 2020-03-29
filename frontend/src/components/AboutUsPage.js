import React from "react";
import { MDBJumbotron, MDBContainer, MDBRow, MDBCol, MDBBtn , MDBCardBody, MDBCardText} from "mdbreact";

const AboutUsPage = () => {
  return (
    <MDBContainer className="mt-5 text-center">
    <MDBRow>
        <MDBCol md="4">
        <MDBRow><MDBBtn color="primary">Who we are</MDBBtn></MDBRow>
        <MDBRow><MDBBtn color="primary">What we do</MDBBtn></MDBRow>
        <MDBRow><MDBBtn color="primary">Contact us</MDBBtn></MDBRow>
        </MDBCol>
    <MDBCol>   
    <MDBJumbotron fluid>  
      <MDBContainer>
      <MDBCardBody>
              <MDBCardText>
                Sed ut perspiciatis unde omnis iste natus sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam.Sed ut perspiciatis unde omnis iste natus sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam.
              </MDBCardText>
              <MDBBtn href="#" color="indigo" class="float-right" rounded>
                more
              </MDBBtn>
            </MDBCardBody>
      </MDBContainer>
    </MDBJumbotron>
    </MDBCol>
    </MDBRow>     
    </MDBContainer>
  )
}

export default AboutUsPage;