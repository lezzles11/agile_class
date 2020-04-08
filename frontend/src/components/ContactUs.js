import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from "mdbreact";

const ContactUs = () => {
  return (
    <MDBContainer>

          <p className="h4-responsive font-weight-bold my-4">Contact Us</p>
          <p className="my-4">
                Please Fill This Form Below.
          </p>
              <form id="contact-form" name="contact-form" className="text-center">
                <div className="row">
                  <div className="col-4">*Full Name:</div>
                  <div className="col-8">
                    <input
                      type="text"
                      id="fullName"
                      autoComplete="fullName"
                      name="fullName"
                      className="form-control"
                    />
                  </div>
                </div>
                <br />
                <br />
                <div className="row">
                  <div className="col-4">*Email:</div>
                  <div className="col-8">
                    <input
                      type="text"
                      id="email"
                      autoComplete="email"
                      name="email"
                      className="form-control"
                    />
                  </div>
                </div>

                <br />
                <br />

                <div className="row">
                  <div className="col-4">*Message:</div>
                  <div className="col-8">
                  <textarea
                    type="text"
                    id="defaultFormContactMessageEx"
                    className="form-control"
                    rows="3"
                  />
                  </div>
                </div>

                <br />
                <br />
                <div className="text-center text-md-center">
                  <button
                    className="blue btn btn-primary"
                  >
                    {" "}
                    Submit{" "}
                  </button>
                </div>
              </form>
    </MDBContainer>
  );
};

export default ContactUs;