import React from "react";
import JumboCard from "../components/JumboCard";
export default class CoachingPage extends React.Component {
	render() {
		return (
			<div className="container">
				<h1>Coaching Page</h1>
				<div className="row">
					<JumboCard
						title="Agile Transformation"
						subtitle="Location"
						button1="Read More"
						button2="Dates"
					/>{" "}
				</div>
				<div className="row">
					<JumboCard
						title="DevOps Transformation"
						subtitle="Location"
						button1="Read More"
						button2="Dates"
					/>{" "}
				</div>
				<div className="row">
					{" "}
					<JumboCard
						title="Tools, Assessments and Implementation"
						subtitle="Location"
						button1="Read More"
						button2="Dates"
					/>{" "}
				</div>
			</div>
		);
	}
}
