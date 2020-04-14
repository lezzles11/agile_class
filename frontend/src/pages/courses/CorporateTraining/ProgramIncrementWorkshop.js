import Template from "../components/Template";
import React, { Component } from "react";

class ProgramIncrementWorkshop extends Component {
  render() {
    return (
      <div>
        <Template 
        logoimage="https://www.dropbox.com/s/pho5ooz3vy8qfh2/Image%205.png?raw=1" 
        title="Program Increment Workshop" 
        about="In an Agile development environment, a program increment (PI) is a timebox during which the Agile Release Train incrementally delivers value through deploying new systems and software.  It is the summation of a set of sprints, and usually lasts 8-12 weeks.  The PI is the final artifact of the scrum framework, and represents a usable solution
 
        This workshop guides participants through the process of defining the program increment, guiding its development cycle, and realizing its functionality through deployment.  Practicing Scrum without a program increment is merely wasted effort and a lost opportunity.  This customized workshop shows your team how to successfully define and deliver the PI.
        " 
        learn="Everyone in the Agile team will benefit from this workshop.  You’ll learn how to set realistic goals for the program increment, how to ensure sprints will deliver the PI, and how to utilize program increments to continuously improve the outcomes of your agile development process." 
        point1 = "Length: Customized for each engagement; typically 3-6 working days"
        point2 = "Effort: 3 hrs/day"
        point3 = "Price: $1500/day"
        
        />
      </div>
    );
  }
}

export default ProgramIncrementWorkshop;
