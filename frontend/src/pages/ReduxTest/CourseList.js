import React from 'react'
import Course from './Course'

const CourseList = props => {
	return (
		<div>
			{props.courses.map(course => (
				<Course key={course.title} course={course}/>
			))}
		</div>
	)
}
export default CourseList