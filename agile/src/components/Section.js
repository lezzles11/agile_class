import React from "react";
import {
	MDBRow,
	MDBCol,
	MDBCardBody,
	MDBIcon,
	MDBBtn,
	MDBView,
	MDBMask
} from "mdbreact";

const ProjectsPage = () => {
	return (
		<div className="container">
			<section className="text-center my-5">
				<h2 className="h1-responsive font-weight-bold my-5">
					Our Services
				</h2>
				<p className="grey-text w-responsive mx-auto mb-5">
					Duis aute irure dolor in reprehenderit in voluptate velit
					esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
					occaecat cupidatat non proident, sunt in culpa qui officia
					deserunt mollit est laborum.
				</p>

				<MDBRow className="text-center">
					<MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
						<MDBView className="overlay rounded z-depth-1" waves>
							<img
								src="https://mdbootstrap.com/img/Photos/Others/images/58.jpg"
								alt=""
								className="img-fluid"
							/>
							<a href="#!">
								<MDBMask overlay="white-slight" />
							</a>
						</MDBView>
						<MDBCardBody className="pb-0">
							<h4 className="font-weight-bold my-3">
								Assessment
							</h4>
							<p className="grey-text">
								Temporibus autem quibusdam et aut officiis
								debitis aut rerum necessitatibus saepe eveniet
								ut et voluptates repudiandae.
							</p>
							<MDBBtn color="indigo" size="sm">
								<MDBIcon far icon="clone" className="left" />{" "}
								Assesssment
							</MDBBtn>
						</MDBCardBody>
					</MDBCol>
					<MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
						<MDBView className="overlay rounded z-depth-1" waves>
							<img
								src="https://mdbootstrap.com/img/Photos/Others/project4.jpg"
								alt=""
								className="img-fluid"
							/>
							<a href="#!">
								<MDBMask overlay="white-slight" />
							</a>
						</MDBView>
						<MDBCardBody className="pb-0">
							<h4 className="font-weight-bold my-3">Training</h4>
							<p className="grey-text">
								Temporibus autem quibusdam et aut officiis
								debitis aut rerum necessitatibus saepe eveniet
								ut et voluptates repudiandae.
							</p>
							<MDBBtn color="indigo" size="sm">
								<MDBIcon far icon="clone" className="left" />{" "}
								Training
							</MDBBtn>
						</MDBCardBody>
					</MDBCol>
					<MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
						<MDBView className="overlay rounded z-depth-1" waves>
							<img
								src="https://mdbootstrap.com/img/Photos/Others/images/88.jpg"
								alt=""
								className="img-fluid"
							/>
							<a href="#!">
								<MDBMask overlay="white-slight" />
							</a>
						</MDBView>
						<MDBCardBody className="pb-0">
							<h4 className="font-weight-bold my-3">Coaching</h4>
							<p className="grey-text">
								Temporibus autem quibusdam et aut officiis
								debitis aut rerum necessitatibus saepe eveniet
								ut et voluptates repudiandae.
							</p>
							<MDBBtn color="indigo" size="sm">
								<MDBIcon far icon="clone" className="left" />{" "}
								Coaching
							</MDBBtn>
						</MDBCardBody>
					</MDBCol>
				</MDBRow>
			</section>
		</div>
	);
};

export default ProjectsPage;
