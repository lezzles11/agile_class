import React from "react";
import {
	MDBContainer,
	MDBNavbar,
	MDBNavbarBrand,
	MDBNavbarNav,
	MDBNavbarToggler,
	MDBCollapse,
	MDBNavItem,
	MDBNavLink,
	MDBIcon
} from "mdbreact";
import { BrowserRouter as Router } from "react-router-dom";

class Navbar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			collapse: false
		};
		this.onClick = this.onClick.bind(this);
	}

	onClick() {
		this.setState({
			collapse: !this.state.collapse
		});
	}

	render() {
		const blue = { backgroundColor: "#33b5e5" };
		const container = { height: 1300 };
		return (
			<div>
				<Router>
					<header>
						<MDBNavbar
							style={blue}
							dark
							expand="md"
							scrolling
							fixed="top"
						>
							<MDBNavbarBrand href="/">
								<strong>Dynamix</strong>
							</MDBNavbarBrand>
							<MDBNavbarToggler onClick={this.onClick} />
							<MDBCollapse isOpen={this.state.collapse} navbar>
								<MDBNavbarNav left>
									<MDBNavItem active>
										<MDBNavLink to="#">
											Assessment
										</MDBNavLink>
									</MDBNavItem>
									<MDBNavItem>
										<MDBNavLink to="#">Training</MDBNavLink>
									</MDBNavItem>
									<MDBNavItem>
										<MDBNavLink to="#">Coaching</MDBNavLink>
									</MDBNavItem>
									<MDBNavItem>
										<MDBNavLink to="#">
											Resources
										</MDBNavLink>
									</MDBNavItem>
								</MDBNavbarNav>
								<MDBNavbarNav right>
									<MDBNavItem>
										<MDBNavLink to="#">
											<MDBIcon fab icon="facebook-f" />
										</MDBNavLink>
									</MDBNavItem>
									<MDBNavItem>
										<MDBNavLink to="#">
											<MDBIcon fab icon="twitter" />
										</MDBNavLink>
									</MDBNavItem>
									<MDBNavItem>
										<MDBNavLink to="#">
											<MDBIcon fab icon="instagram" />
										</MDBNavLink>
									</MDBNavItem>
								</MDBNavbarNav>
							</MDBCollapse>
						</MDBNavbar>
					</header>
				</Router>
			</div>
		);
	}
}

export default Navbar;
