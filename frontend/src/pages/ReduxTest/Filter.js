import React from 'react'
import { BrowserRouter as Link } from "react-router-dom";
import { createStore } from 'redux'
import { connect } from 'react-redux'; 
import mockData from './reducers'
const style = {
  width: "200px",
};
const Course = props => {
	return (
		<div className="container">
<Link to="/">
	
		<div className="card">
		<div className="card-body">
		{props.course.title}
		</div>
		</div>
		</Link>
		</div>
	)
}
/*
 {
    date: "6/1/20",
    title: "CSPO – Certified Scrum Product Owner ",
    image: "https://www.dropbox.com/s/6a39mnbzc0jxev8/CSPO_Logo.png?raw=1",
    description:
      "A Scrum Product Owner generally comes from the business side of the organization.  In the agile world, the product owner not only manages the vision and backlog, they also help focus the team on providing the outcomes that will delight the customers.",
    amount: 2,
    type: "Certification",
    account: "Scrum Alliance",
    url: "/CSPO",
  },
*/
const CourseList = props => {
	return (
		<div>
			{props.courses.map(course => (
				<Course key={course.title} course={course}/>
			))}
		</div>
	)
}
const TYPES = ['Certification', 'Course']
class CoursePage extends React.Component { 
	renderCourseLists() {
		const {courses} = this.props; 
		return TYPES.map(type => {
			const selectedCourses = courses.filter(c => c.type === type);
			return <CourseList key={type} courses={selectedCourses} />
		})
	}
	render() {
		return (
			<div><h1>Page</h1>
			{this.renderCourseLists()}</div> 
		)
	}
}


class Filter extends React.Component {
	render() {
		return (
			<div>
				<h1>Test</h1>
				<CoursePage courses={this.props.courses} />
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		courses: state.courses
	}
}
export default connect(mapStateToProps)(Filter)