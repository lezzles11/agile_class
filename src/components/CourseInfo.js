import React from "react";
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBMask,
  MDBIcon,
  MDBView,
  MDBBtn
} from "mdbreact";

const CourseInfo = () => {
  return (
    <MDBCard className="my-5 px-5 pb-5">
      <MDBCardBody>
        <h2 className="h1-responsive font-weight-bold text-center my-5">
          Upcoming Courses
        </h2>
        <p className="text-center w-responsive mx-auto mb-5">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </p>
        <MDBRow>
          <MDBCol lg="5">
            <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
              <img
                className="img-fluid"
                src="https://mdbootstrap.com/img/Photos/Others/img%20(27).jpg"
                alt=""
              />
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
          </MDBCol>
          <MDBCol lg="7">
            <a href="#!" className="green-text">
              <h6 className="font-weight-bold mb-3">
                <MDBIcon icon="utensils" className="pr-2" />
                Training
              </h6>
            </a>
            <h3 className="font-weight-bold mb-3 p-0">
              <strong>Scrum.org</strong>
            </h3>
            <p>
              Nam libero tempore, cum soluta nobis est eligendi optio cumque
              nihil impedit quo minus id quod maxime placeat facere possimus,
              omnis voluptas assumenda est, omnis dolor repellendus et aut
              officiis debitis.
            </p>
            <p>
              by
              <a href="#!">
                <strong> Dynamix</strong>
              </a>
              , Spring 2019
            </p>
            <MDBBtn color="success" size="md" className="waves-light ">
              PSM
            </MDBBtn>

            <MDBBtn color="success" size="md" className="waves-light ">
              PSPO
            </MDBBtn>
            <MDBBtn color="success" size="md" className="waves-light ">
              PSD
            </MDBBtn>
          </MDBCol>
        </MDBRow>
        <hr className="my-5" />
        <MDBRow>
          <MDBCol lg="7">
            <a href="#!" className="pink-text">
              <h6 className="font-weight-bold mb-3">
                <MDBIcon icon="image" className="pr-2" />
                Agile
              </h6>
            </a>
            <h3 className="font-weight-bold mb-3 p-0">
              <strong>Scrum Alliance</strong>
            </h3>
            <p>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident.
            </p>
            <p>
              by
              <a href="#!">
                <strong> Dynamix</strong>
              </a>
              , Spring 2019
            </p>
            <MDBBtn color="pink" size="md" className="mb-lg-0 mb-4 waves-light">
              CSM
            </MDBBtn>
            <MDBBtn color="pink" size="md" className="mb-lg-0 mb-4 waves-light">
              CSPO
            </MDBBtn>
            <MDBBtn color="pink" size="md" className="mb-lg-0 mb-4 waves-light">
              CSD
            </MDBBtn>
          </MDBCol>
          <MDBCol lg="5">
            <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
              <img
                className="img-fluid"
                src="https://mdbootstrap.com/img/Photos/Others/img%20(34).jpg"
                alt=""
              />
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
          </MDBCol>
        </MDBRow>
        <hr className="my-5" />
        <MDBRow>
          <MDBCol lg="5">
            <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
              <img
                className="img-fluid"
                src="https://mdbootstrap.com/img/Photos/Others/img (28).jpg"
                alt=""
              />
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
          </MDBCol>
          <MDBCol lg="7">
            <a href="#!" className="indigo-text">
              <h6 className="font-weight-bold mb-3">
                <MDBIcon icon="suitcase" className="pr-2" />
                Software Development
              </h6>
            </a>
            <h3 className="font-weight-bold mb-3 p-0">
              <strong>PMI</strong>
            </h3>
            <p>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt. Neque porro qui dolorem ipsum quia sit
              amet.
            </p>
            <p>
              by
              <a href="#!">
                <strong> Dynamix</strong>
              </a>
              , Spring 2019
            </p>
            <MDBBtn color="indigo" size="md" className="waves-light ">
              PMI
            </MDBBtn>
            <MDBBtn color="indigo" size="md" className="waves-light ">
              PMI - ACP
            </MDBBtn>
          </MDBCol>
        </MDBRow>
      </MDBCardBody>
    </MDBCard>
  );
};

export default CourseInfo;
