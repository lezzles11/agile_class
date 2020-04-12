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

import Getinspired1 from "assets/img_Getinspired1.jpg";
import Getinspired2 from "assets/img_Getinspired2.jpg";
import Getinspired3 from "assets/img_Getinspired3.jpg";
import Getinspired4 from "assets/img_Getinspired4.jpg";
import Getinspired5 from "assets/img_Getinspired5.jpg";
import Getinspired6 from "assets/img_Getinspired6.jpg";

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
                  url={Getinspired1}
                  // title="Maturity Assessment"
                  text='"The Leadership Maturity Assessment gave my team leads
                  the knowledge they needed to step up their leadership
                  and increase agility within our teams. Thank you,
                  Dynamix Agile!"'
                />
              </MDBCol>
              <MDBCol md="4">
                <Card
                  url={Getinspired2}
                  // title="Training"
                  text='"After taking the CSM course from Dynamix Agile, I was
                  able to pass the CSM exam on the first try and was
                  promoted within six months. Many thanks to my Dynamix
                  Agile trainers!"'
                />
              </MDBCol>
              <MDBCol md="4">
                <Card
                  url={Getinspired3}
                  // title="Knowledgeable Coaches"
                  text='"I was really struggling to grow in my career. Dynamix
                  Agile provided me the training I needed in order to gain
                  my PMP certification, and eventually my next promotion!"'
                />
              </MDBCol>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="2">
              <MDBCol md="4">
                <Card
                  url={Getinspired4}
                  // title="Knowledgeable Coaches"
                  text='"My team had a fantastic workshop hosted by Dynamix
                  Agile. The workshop activities were engaging, and we
                  left feeling more connected to each other and excited
                  for the work ahead!"'
                />
              </MDBCol>
              <MDBCol md="4">
                <Card
                  url={Getinspired5}
                  // title="Training"
                  text='"As a senior developer, I needed to learn how to build
                  projects more efficiently within my teams. The CSPO
                  course equipped me with the agility I needed to move
                  projects quickly and on budget."'
                />
              </MDBCol>
              <MDBCol md="4">
                <Card
                  url={Getinspired6}
                  // title="Maturity Assessment"
                  text='"As a manager, I wanted my team leads to learn how to
                  use Kanban and Scrum to enhance our performance and keep
                  users happy with constant delivery. We learned all that
                  and more!"'
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
