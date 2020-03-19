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
	MDBCardTitle
} from "mdbreact";

const JumboCard = ({ title, subtitle, button1, button2 }) => {
	return (
		<MDBContainer className="mt-5 text-center">
			<MDBRow>
				<MDBCol>
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
								architecto, amet quasi accusantium, fugit
								consequatur ducimus obcaecati numquam molestias
								hic itaque accusantium doloremque laudantium,
								totam rem aperiam.
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
								<MDBBtn
									outline
									color="primary"
									className="waves-effect"
								>
									{button2} <MDBIcon icon="download" />
								</MDBBtn>
							</div>
						</MDBCardBody>
					</MDBJumbotron>
				</MDBCol>
			</MDBRow>
		</MDBContainer>
	);
};

export default JumboCard;
