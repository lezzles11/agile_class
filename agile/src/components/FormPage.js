import React, { useState } from "react";
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBInput
} from "mdbreact";


const FormPage = () => {
    const [pass, setPass] = useState("")
    const passHandler = event => {
        setPass(event.target.value)
    }
    return (
        <div> 
    	<input type="text" onChange={setPass} />
    	<form onSubmit={passHandler}> 
    	{pass === 'emailLesley' && <div> <h1> hi </h1></div>} 
    	</form>
        <MDBContainer>
			<MDBRow>
				<MDBCol>
					<MDBCard>
						<div className="header pt-3 grey lighten-2">
							<MDBRow className="d-flex justify-content-start">
								<h3 className="deep-grey-text mt-3 mb-4 pb-1 mx-5">
									Create Your Own Account Below
								</h3>
							</MDBRow>
						</div>
						<MDBCardBody className="mx-4 mt-4">
							<MDBInput
								label="Full Name"
								group
								type="text"
								validate
							/>
							<MDBInput
								label="Email"
								group
								type="text"
								validate
							/>
							<MDBInput
								label="Your password"
								group
								type="password"
								validate
								containerClass="mb-0"
							/>
							<MDBInput
								label="Country"
								group
								type="text"
								validate
							/>
							<MDBInput
								label="Contact Number"
								group
								type="text"
								validate
							/>
							<MDBInput
								label="Mailing Address"
								group
								type="text"
								validate
							/>
							<MDBInput
								label="Courses"
								group
								type="text"
								validate
							/>
							<MDBInput
								label="Payment Information"
								group
								type="text"
								validate
							/>
							<div className="text-center mb-4 mt-5">
								<MDBBtn
									color="danger"
									type="button"
									className="btn-block z-depth-2"
								>
									Register
								</MDBBtn>
							</div>
						</MDBCardBody>
					</MDBCard>
				</MDBCol>
			</MDBRow>
		</MDBContainer>
		</div>
    );
};

export default FormPage;