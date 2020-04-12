import Template from "../components/Template";
import React, { Component } from "react";

class CSD extends Component {
  render() {
    return (
      <div>
        <Template 
        logoimage="https://www.dropbox.com/s/vafhd26njihf5jc/CSD_Logo.png?raw=1" 
        title="CSD – Certified Scrum Developer" 
        about="Designed for developers, this course will hone your agile skills.  Through both formal training and an assessment of your technical skills, you’ll obtain a working knowledge of Scrum and Agile principles.  In addition, you’ll learn the engineering skills used by Agile developers.  The course instructs developers in the tools and techniques for delivering code in an iterative process, key to Agile software development
        " 
        learn="Upon completing this course, you will have mastered the skill set required to engage in an Agile development environment.  You’ll become proficient with the tools and techniques used to contribute to an agile team.  Certification as a Certified Scrum Developer demonstrates your commitment to the Agile principles.
        " 
        point1 = "Length: 40 hours (5 days) in-person class, or 50 hours in-person coaching"
        point2 = "Effort: 5 hrs/week"
        point3 = "Price: $3000"
        />
      </div>
    );
  }
}

export default CSD;
