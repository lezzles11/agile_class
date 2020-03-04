import React from "react";
import ReactCalendar from "../components/ReactCalendar";
import JumboCard from "../components/JumboCard";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

import ListGroup from "../components/ListGroup";
export default class UpcomingCoursesPage extends React.Component {
	render() {
		return (
			<div className="container">
				<div className="ctr header">
					<h1>Upcoming Courses</h1>
				</div>
				<div className="row">
					<div className="row">
						<MDBCol md="3">
							<br />
							<br />
							<ListGroup /> <br />
							<ReactCalendar />
						</MDBCol>

						<MDBCol md="9">
							<div className="row">
								<JumboCard
									title="Course A"
									subtitle="Location"
									button1="Read More"
									button2="Dates"
								/>{" "}
							</div>
							<div className="row">
								<JumboCard
									title="Course B"
									subtitle="Location"
									button1="Read More"
									button2="Dates"
								/>{" "}
							</div>
							<div className="row">
								{" "}
								<JumboCard
									title="Course B"
									subtitle="Location"
									button1="Read More"
									button2="Dates"
								/>{" "}
							</div>
							<div className="row"></div>
							<div className="row"></div>
						</MDBCol>
					</div>
				</div>
				<div className="row">
					<div className="col">
						{" "}
						<JumboCard
							title="Agile"
							subtitle="Learn the skills to reach the next level"
							button1="Register"
							button2="See Past Testimonials"
						/>
					</div>
				</div>
				<div className="row">
					<div className="col">
						<JumboCard
							title="About This Course"
							subtitle=""
							button1="Register"
							button2="Read More"
						/>
					</div>
					<div className="col">
						<JumboCard
							title=""
							subtitle=""
							button1="Register"
							button2="Read More"
						/>
					</div>
				</div>
				<div className="row">
					<div className="col">
						<JumboCard
							title="Meet the Instructors "
							subtitle="Decades of Experience"
							button1="Register"
							button2="Read More"
						/>
					</div>
					<div className="col">
						<JumboCard
							title=""
							subtitle=""
							button1="Register"
							button2=""
						/>
					</div>
				</div>
			</div>
		);
	}
}
