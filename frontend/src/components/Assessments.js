import React from "react";
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBMask,
  MDBIcon,
  MDBView,
  MDBBtn,
  MDBContainer,
  MDBJumbotron,
  MDBCardText,
} from "mdbreact";
import { BrowserRouter as Router, Link } from "react-router-dom";
const style = {
  height: "300px",
  width: "100%",
};
const Assessments = () => {
  return (
    <MDBContainer>
      <MDBCard className="my-5 px-5 pb-5">
        <MDBCardBody>
          <MDBRow>
            <MDBCol>
              <MDBView hover className="rounded z-depth-1-half mb-lg-0 mb-4">
                <img
                  style={style}
                  className="img-fluid"
                  src="https://www.dropbox.com/s/z2u1fduke8su34b/Scrolling%20Image_Assessment.jpg?raw=1"
                  alt=""
                />
                <a href="#!">
                  <MDBMask overlay="white-slight" />
                </a>
              </MDBView>
            </MDBCol>
            <MDBCol
              size="3"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Link to="/contactus">
                <MDBBtn color="blue">Contact Us</MDBBtn>
              </Link>
            </MDBCol>
          </MDBRow>
          <MDBRow className="mb-5">
            <MDBCol>
              <br />
              <h6>What Are The Different Types of Assessment?</h6>
            </MDBCol>
          </MDBRow>
          <MDBRow className="mb-5">
            <MDBCol>
              <ul>
                <li>
                  <h6>Why Assessment?</h6>
                  <MDBJumbotron style={{ padding: 0 }}>
                    <MDBCol className="text-white text-center py-2 px-2 my-2">
                      <MDBCol className="py-2">
                        <MDBCardText className="mx-2 mb-2">
                          <p>
                            Today, more and more companies are adopting
                            iterative software design methodologies like Agile.
                            Whether you are just starting on this journey or if
                            you already have adopted many agile techniques, it’s
                            vitally important to first understand where you are
                            so you know what you need to do. As we have done for
                            so many other companies, Dynamix Agile can be your
                            partner in assessing your current capability, to
                            help remediate those areas needing correction, and
                            to create a plan for upgrading skills on your Agile
                            journey.{" "}
                          </p>

                          <p>
                            While you may find a number of skill surveys online,
                            Dynamix Agile offers six comprehensive Agile skill
                            assessments to pinpoint your current capabilities.
                            We drew upon our extensive background in software
                            development to create, from scratch, assessments
                            that reflect actual business environments. Following
                            your assessment, Dynamix Agile will work with you to
                            provide both individualized and customized coaching;
                            Dynamix Agile complements our customized training
                            with a number of certification-oriented training
                            programs.
                          </p>

                          <p>
                            The Dynamix Agile assessments contain both
                            prescriptive and proscriptive components. We can
                            recognize those patterns and behaviors in your
                            organization that have you on the right track to
                            improving your agility. As experts in agile software
                            development with decades of industry experience in
                            business like yours, we can identify those behaviors
                            that you will want to build upon. Equally important,
                            our experience as developers and leaders within the
                            software industry will allow us to recognize other
                            patterns and behaviors that are detracting from your
                            business and development agility.
                          </p>
                        </MDBCardText>
                      </MDBCol>
                    </MDBCol>
                  </MDBJumbotron>
                </li>
                <li>
                  <h6>What are the different types of Assessment?</h6>
                  <MDBJumbotron style={{ padding: 0 }}>
                    <MDBCol className="text-white text-center py-2 px-2 my-2">
                      <MDBCol className="py-2">
                        <MDBCardText className="mx-2 mb-2">
                          <p>
                            In today’s market, there are several different types
                            of assessments available to meet the needs of
                            various organizations and enterprises. The type of
                            assessment that will be a best fit for your
                            organization will depend on your specific needs and
                            the type of assessment you are seeking.
                          </p>

                          <p>
                            Below is a list of the assessments offered to you by
                            Dynamix Agile. We are fully equipped to provide you
                            and your organization, team, or enterprise with an
                            assessment that is best suited to your needs and
                            specific industry. Please read the descriptions
                            below in order to help you determine which
                            assessment is the best fit for you.
                          </p>
                        </MDBCardText>
                      </MDBCol>
                    </MDBCol>
                  </MDBJumbotron>
                </li>
                <li>
                  <h6>Leadership Assessment</h6>
                  <MDBJumbotron style={{ padding: 0 }}>
                    <MDBCol className="text-white text-center py-2 px-2 my-2">
                      <MDBCol className="py-2">
                        <MDBCardText className="mx-2 mb-2">
                          The effectiveness of Agile development efforts will be
                          either magnified or diminished by your organization’s
                          leaders. The Dynamix Agile leadership assessment
                          quantitatively assesses the skills and capabilities of
                          your leadership team. As outlined in the Agile
                          Manifesto, the following principles are of paramount
                          importance to leaders. First, producing value: does
                          leadership recognize that the production of value over
                          the production of features? Second, encouraging
                          change: does leadership not only welcome change, and
                          not only encourage change, but actually reward change?
                          And third, deliver frequently: does leadership guide
                          the organization to processes conducive to continuous
                          improvement and delivery? Dynamix Agile’s leadership
                          assessment comprehensively surveys leadership skill in
                          your organization, and it produces recommendations to
                          get leadership on the right track to agility.
                        </MDBCardText>
                      </MDBCol>
                    </MDBCol>
                  </MDBJumbotron>
                </li>
                <li>
                  <h6>Organization Assessment</h6>
                  <MDBJumbotron style={{ padding: 0 }}>
                    <MDBCol className="text-white text-center py-2 px-2 my-2">
                      <MDBCol className="py-2">
                        <MDBCardText className="mx-2 mb-2">
                          As important as Agile is to your software development
                          teams, many of the same principles apply to your
                          organization. The Dynamix Agile Organization
                          Assessment will measure your current capabilities as
                          an Agile organization. We will identify those areas
                          where you are on the right track as well as those
                          where you are following practices that are
                          counterproductive. Like a tried and true family
                          recipe, we have distilled our decades of experience in
                          the software industry to create a comprehensive
                          assessment of software development practices. Among
                          others metrics, we assess the following key
                          capabilities: value: do each your product releases
                          produce recognizable and useful value for the
                          customer; openness to change: are your organizations
                          receptive and encouraging of changing requirements,
                          both early and late in the product cycle; and frequent
                          deliveries via a continuous improvement and delivery
                          pipeline.
                        </MDBCardText>
                      </MDBCol>
                    </MDBCol>
                  </MDBJumbotron>
                </li>
                <li>
                  <h6>Portfolio Assessment</h6>
                  <MDBJumbotron style={{ padding: 0 }}>
                    <MDBCol className="text-white text-center py-2 px-2 my-2">
                      <MDBCol className="py-2">
                        <MDBCardText className="mx-2 mb-2">
                          Rarely does a company produce a single product or
                          feature that is divorced from other cooperating
                          products. In an organization with multiple and
                          simultaneous development efforts, a siloed approach to
                          product development becomes counterproductive. Do your
                          product teams operate independently or is there a
                          cooperative spirit aligning your goals? Is progress
                          gated by milestones and measured by the number of
                          tasks completed? Many of the same techniques you apply
                          to iterative software development also apply to
                          portfolio management. Our portfolio assessment
                          ascertains where you sit on an Agile spectrum and more
                          importantly, what practices can you adopt that will
                          bring value, openness to change, and improved delivery
                          to your product portfolio.
                        </MDBCardText>
                      </MDBCol>
                    </MDBCol>
                  </MDBJumbotron>
                </li>
                <li>
                  <h6>Program Assessment</h6>
                  <MDBJumbotron style={{ padding: 0 }}>
                    <MDBCol className="text-white text-center py-2 px-2 my-2">
                      <MDBCol className="py-2">
                        <MDBCardText className="mx-2 mb-2">
                          The Dynamix Agile program assessment evaluates how
                          well your program development strategy aligns with
                          your product portfolio. In an organization with
                          multiple simultaneous development streams, cooperation
                          and good intentions alone will not produce intended
                          results. Dynamix Agile measures the engagement of
                          program stakeholders and analyzes strategies for
                          predictability and problem resolution. Dynamix Agile
                          looks at program planning - is it synchronized with
                          the other programs in your enterprise portfolio? The
                          Dynamix Agile program assessment measures the
                          propensity of your program to exist cooperatively
                          within the portfolio and deliver value while being
                          open to change.
                        </MDBCardText>
                      </MDBCol>
                    </MDBCol>
                  </MDBJumbotron>
                </li>
                <li>
                  <h6>Team Assessment</h6>
                  <MDBJumbotron style={{ padding: 0 }}>
                    <MDBCol className="text-white text-center py-2 px-2 my-2">
                      <MDBCol className="py-2">
                        <MDBCardText className="mx-2 mb-2">
                          There are two important considerations. First, there
                          is no perfect team environment. Second, creating an
                          environment where teams can thrive takes a lot of
                          work. The Dynamix Agile Team Assessment looks at the
                          makeup and dynamics of an individual agile team. We
                          ascertain to what degree has the team jelled or what
                          obstacles may be preventing that from occurring. We
                          look at the team dynamics: how much trust is there
                          between team members? Is there a team culture, and if
                          so, is the culture beneficial to, or detrimental to,
                          the team’s success? Does the team feel empowered to
                          deliver great products? Dynamix Agile’s decades of
                          experience in Agile organizations allows us to
                          recognize and assess those aspects of teamwork that
                          encourage producing value, being open to change, and
                          allow for continuous improvement and delivery.
                        </MDBCardText>
                      </MDBCol>
                    </MDBCol>
                  </MDBJumbotron>
                </li>
                <li>
                  <h6>Individual role/talent</h6>
                  <MDBJumbotron style={{ padding: 0 }}>
                    <MDBCol className="text-white text-center py-2 px-2 my-2">
                      <MDBCol className="py-2">
                        <MDBCardText className="mx-2 mb-2">
                          Dynamix Agile in-house experts are not just experts in
                          the Agile development methodology, but we have earned
                          that expertise from decades of experience in multiple
                          software industries. We know individuals like your key
                          contributors because we have also been key
                          contributors. Drawing from deep domain expertise,
                          Dynamix Agile can assess the capabilities of key
                          individuals within your organization. The core Agile
                          principles of delivering value, openness to change,
                          and improving delivery represent transformative skills
                          and behavior. Our assessments first measures where
                          your key contributors are on an Agile spectrum. In
                          addition, the assessment produces concrete
                          recommendations for help them achieve excellence.
                        </MDBCardText>
                      </MDBCol>
                    </MDBCol>
                  </MDBJumbotron>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
          <MDBRow
            style={{
              position: "absolute",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <Link to="/contactus">
              <MDBBtn color="blue">Contact Us</MDBBtn>
            </Link>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
};

export default Assessments;
