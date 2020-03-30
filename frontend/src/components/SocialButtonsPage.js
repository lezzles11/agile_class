import React from 'react';
import { MDBIcon, MDBContainer, MDBBtn } from 'mdbreact';

const SocialButtonsPage = () => {
  return (
    <MDBContainer>
      <MDBBtn size="sm" tag="a" floating social="fb">
        <MDBIcon fab icon="facebook-f" />
      </MDBBtn>
      <MDBBtn size="sm" tag="a" floating social="tw">
        <MDBIcon fab icon="twitter" />
      </MDBBtn>
      <MDBBtn size="sm" tag="a" floating social="li">
        <MDBIcon fab icon="linkedin-in" />
      </MDBBtn>
      <MDBBtn size="sm" tag="a" floating social="yt">
        <MDBIcon fab icon="youtube" />
      </MDBBtn>
   </MDBContainer>
  );
}

export default SocialButtonsPage;