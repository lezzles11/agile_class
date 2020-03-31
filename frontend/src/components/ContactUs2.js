import React from "react";

function Image({ link, col }) {
  const height = {
    width: "100%"
  };
  return (
    <div className={col}>
      <img style={height} className="img-fluid" src={link} href="_blank" />
    </div>
  );
}

export default class ContactUs2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "",
      email: "",
      password: "",
      country: "",
      mailingAddress: "",
      contactNumber: "",
      courses: "",
      paymentInfo: ""
    };

    // This binding is necessary to make `this` work in the callback
    this.handleReset = this.handleReset.bind(this);
  }
  handleReset() {
    this.setState(state => ({
      fullName: "",
      email: "",
      password: "",
      country: "",
      mailingAddress: "",
      contactNumber: "",
      courses: "",
      paymentInfo: ""
    }));
  }

  render() {
    return (
      <div className="container">
        <section className="mb-4">
          <div className="row">
            <div className="col-8">
              <h2 className="h1-responsive font-weight-bold text-center my-4">
                Stay Connected With Us
              </h2>
              <p className="text-center my-4">
                Receiving information on upcoming workshops and insights.
              </p>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-md-9 mb-md-0 mb-5">
              <form id="contact-form" name="contact-form">
                <div className="row">
                  <div className="col-3">*Full Name:</div>
                  <div className="col-6">
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
                  <div className="col-3">*Email:</div>
                  <div className="col-6">
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
                <div className="text-center text-md-center">
                  <button
                    onClick={this.handleReset}
                    className="blue btn btn-primary"
                  >
                    {" "}
                    Sign Up{" "}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>{" "}
      </div>
    );
  }
}
