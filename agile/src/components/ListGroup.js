import React from "react";

export default class ListGroup extends React.Component {
	render() {
		return (
			<div className="container">
				<div className="list-group">
					<button
						type="button"
						className="list-group-item list-group-item-action active"
					>
						All Courses
					</button>
					<button
						type="button"
						className="list-group-item list-group-item-action"
					>
						Course Type
					</button>
					<button
						type="button"
						className="list-group-item list-group-item-action"
					>
						Location
					</button>
					<button
						type="button"
						className="list-group-item list-group-item-action"
					>
						Partners
					</button>
					<button
						type="button"
						className="list-group-item list-group-item-action"
					>
						Trainers
					</button>
				</div>
			</div>
		);
	}
}
