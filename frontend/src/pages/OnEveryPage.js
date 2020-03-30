import React from "react";
import Header from "../components/Header";
import Navbar2 from "../components/Navbar2";

export default class OnEveryPage extends React.Component {
	render() {
		return (
			<div>
				{" "}
				<Navbar2 />
				<Header />
				<div>
					<br />
					<br />{" "}
				</div>
			</div>
		);
	}
}
