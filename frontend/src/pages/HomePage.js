import React from "react";
import AgileLogos from "../components/AgileLogos";
import AboutUs from "../components/AboutUs";
import CourseInfo from "../components/CourseInfo";
import Services from "../components/Services";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBContainer,
  MDBRow,
  MDBCol,
} from "mdbreact";

const GetInspired = () => {
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
                <Card
                  url="https://www.dropbox.com/s/ax4s1mv90qqshg2/Page%203_Instructor%202.jpg?raw=1"
                  title="Maturity Assessment"
                  text="The Agile Maturity Assessment gave our company the
                      knowledge we needed to improve in our industry"
                />
              </MDBCol>
              <MDBCol md="4">
                <Card
                  url="https://www.dropbox.com/s/c1fhv8ck278cg8b/Page%203_Instructor%201.jpg?raw=1"
                  title="Training"
                  text="The training provided by Agile Dynamix gave me the
                      certification I needed to grow in my field"
                />
              </MDBCol>
              <MDBCol md="4">
                <Card
                  url="https://www.dropbox.com/s/745e5th2bepkvbs/Screen%20Shot%202020-03-09%20at%202.14.11%20AM.png?raw=1"
                  title="Knowledgeable Coaches"
                  text="Fantastic coaching! Knowledgeable coaches, inspiring, and
                      able to meet my team’s needs!"
                />
              </MDBCol>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="2">
              <MDBCol md="4">
                <Card
                  url="https://www.dropbox.com/s/745e5th2bepkvbs/Screen%20Shot%202020-03-09%20at%202.14.11%20AM.png?raw=1"
                  title="Knowledgeable Coaches"
                  text="Fantastic coaching! Knowledgeable coaches, inspiring, and
                      able to meet my team’s needs!"
                />
              </MDBCol>
              <MDBCol md="4">
                <Card
                  url="https://www.dropbox.com/s/4pg8sb90nf08e62/Screen%20Shot%202020-03-09%20at%202.14.18%20AM.png?raw=1"
                  title="Training"
                  text="The training provided by Agile Dynamix gave me the
                      certification I needed to grow in my field"
                />
              </MDBCol>
              <MDBCol md="4">
                <Card
                  url="https://www.dropbox.com/s/zda2kr86svwz4ie/Screen%20Shot%202020-03-09%20at%202.15.12%20AM.png?raw=1"
                  title="Maturity Assessment"
                  text="The Agile Maturity Assessment gave our company the
                      knowledge we needed to improve in our industry"
                />
                {/* 
                <MDBCard className="justify-content-md-center mb-2">
                  <MDBCardBody className="justify-text-center ">
                    <br />
                    <MDBCardImage
                      style={{ width: "15rem" }}
                      className="justify-content-md-center img-fluid"
                      src="https://www.dropbox.com/s/zda2kr86svwz4ie/Screen%20Shot%202020-03-09%20at%202.15.12%20AM.png?raw=1"
                    />
                    <br />
                    <MDBCardTitle>Maturity Assessment</MDBCardTitle>
                    <MDBCardText>
                      The Agile Maturity Assessment gave our company the
                      knowledge we needed to improve in our industry
                    </MDBCardText>
                  </MDBCardBody>
                </MDBCard>
				*/}
              </MDBCol>
            </MDBCarouselItem>
          </MDBRow>
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
  );
};

function Card({ url, title, text }) {
  const style = {
    width: "15rem",
  };
  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
          <div className="row  justify-content-md-center">
            <img style={style} src={url} alt="coachimage" />
          </div>
          <br />
          <h4 className="card-title">{title}</h4>

          <div className="card-text">{text}</div>
        </div>
      </div>
    </div>
  );
}

export default class UpcomingCoursesPage extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="ctr header">
          <h1 className="text-center">Our Services</h1>
        </div>
        <div>
          <Services />
        </div>
        <div className="ctr header">
          <h1 className="text-center">About Us</h1>
        </div>
        <div>
          <AboutUs />
        </div>

        <div className="ctr header">
          <h1 className="text-center">Our Partners</h1>
        </div>
        <div>
          <AgileLogos />
          <br />
        </div>

        <div className="ctr header">
          <h1 className="text-center">Get Inspired</h1>
        </div>
        <div>
          <GetInspired />
          <br />
        </div>

        <div>
          <ContactUs2 />
        </div>
      </div>
    );
  }
}

class ContactUs2 extends React.Component {
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
      paymentInfo: "",
    };

    // This binding is necessary to make `this` work in the callback
    this.handleReset = this.handleReset.bind(this);
  }
  handleReset() {
    this.setState((state) => ({
      fullName: "",
      email: "",
      password: "",
      country: "",
      mailingAddress: "",
      contactNumber: "",
      courses: "",
      paymentInfo: "",
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
