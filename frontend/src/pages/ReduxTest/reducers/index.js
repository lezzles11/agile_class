import React from 'react'


const mockData = [
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
	   {
		date: "6/1/20",
		title: "Customized Kanban",
		image: "https://www.dropbox.com/s/ol4ow6tafftc0qm/Image%203.png?raw=1",
		description:
		  "A workshop designed to help teams be equipped to use Scrum and Kanban principles in their working environments.",
		amount: 2,
		type: "Course",
		account: "Corporate Training",
		url: "/CustomizedKanban",
	  },
]

// Reducer 
export default function courses(state = {courses: mockData}, action) {
	return state; 
}
