import React from "react";
import {
	MDBJumbotron,
	MDBBtn,
	MDBContainer,
	MDBRow,
	MDBCol,
	MDBIcon,
	MDBCardBody,
	MDBCardText,
	MDBCardTitle,
	MDBView,
	MDBMask
} from "mdbreact";

const JumboCard2 = ({ title, subtitle, button1}) => {
	return (
		<MDBContainer className="mt-5 text-center">
			<MDBRow>
				<MDBCol>
				<MDBView hover className="rounded z-depth-1-half mb-lg-0 mb-4">
							<img
								className="img-fluid"
								src="https://mdbootstrap.com/img/Photos/Others/images/49.jpg"
								alt=""
							/>
							<a href="#!">
								<MDBMask overlay="white-slight" />
							</a>
							</MDBView>
					<MDBJumbotron>
						<MDBCardBody>
							<MDBCardTitle className="h2">{title}</MDBCardTitle>
							<p className="blue-text my-4 font-weight-bold">
								{subtitle}
							</p>
							<MDBCardText>
								Lorem ipsum dolor sit amet, consectetur
								adipisicing elit. Fuga aliquid dolorem ea
								distinctio exercitationem delectus qui, quas eum
								architecto, amet quasi accusantium.
							</MDBCardText>
							<hr className="my-4" />
							<div className="pt-2">
								<MDBBtn
									color="primary"
									className="waves-effect"
								>
									{button1}
									<MDBIcon far icon="gem" />
								</MDBBtn>								
							</div>
						</MDBCardBody>
					</MDBJumbotron>
				</MDBCol>
			</MDBRow>
		</MDBContainer>
	);
};

export default JumboCard2;
