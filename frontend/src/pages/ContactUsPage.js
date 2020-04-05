import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from "mdbreact";

const ContactUs = () => {
  return (
    <MDBContainer>
      <div className="justify-content-center">
        <form>
          <p className="h4 text-center mb-4">Write to us</p>
          <label htmlFor="defaultFormContactNameEx" className="grey-text">
            Your name
          </label>
          <input
            type="text"
            id="defaultFormContactNameEx"
            className="form-control"
          />
          <br />
          <label htmlFor="defaultFormContactEmailEx" className="grey-text">
            Your email
          </label>
          <input
            type="email"
            id="defaultFormContactEmailEx"
            className="form-control"
          />
          <br />
          <label htmlFor="defaultFormContactSubjectEx" className="grey-text">
            Subject
          </label>
          <input
            type="text"
            id="defaultFormContactSubjectEx"
            className="form-control"
          />
          <br />
          <label htmlFor="defaultFormContactMessageEx" className="grey-text">
            Your message
          </label>
          <textarea
            type="text"
            id="defaultFormContactMessageEx"
            className="form-control"
            rows="3"
          />
          <div className="text-center mt-4">
            <MDBBtn color="warning" outline type="submit">
              Send
              <MDBIcon far icon="paper-plane" className="ml-2" />
            </MDBBtn>
          </div>
        </form>
      </div>
    </MDBContainer>
  );
};

export default class ContactUsPage extends React.Component {
  render() {
    return (
      <div>
        <ContactUs />
      </div>
    );
  }
}
