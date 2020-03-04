import React from "react";
import FormPage from "../components/FormPage";

export default class RegisterPage extends React.Component {
	render() {
		return (
			<div className="container">
				<div className="text-center">
					<h1>Welcome!</h1>
					<h3>Register Below to Create an Account</h3>
					<br />
					<br />
					<br />
					<FormPage />
				</div>
			</div>
		);
	}
}
