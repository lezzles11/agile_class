import Template from "../components/Template";
import React, { Component } from "react";

class Architect extends Component {
  render() {
    return (
      <div>
        <Template 
        logoimage="https://www.dropbox.com/s/opshxvbnq65zsu2/ARCH.png?raw=1" 
        title="SAFe® for Architects " 
        about="Architects in an Agile environment need to understand how to engage their entire organization to improve value flow.  Senior System, Solution and Enterprise Architects will learn how to architect in a way that enables DevOps and Release on Demand.  They’ll understand how to incorporate vision, intent and roadmaps in their designs, and will obtain a deeper appreciation for how architects contribute to an Agile/Lean organization." 
        learn="The SAFe for Architects course will give senior technical contributors the skills and understanding to align their designs with the business value, and to steer toward the continuous system-of-systems flow.  Completion of the course allows the participant to take the Certified SAFe® Architect exam." 
        point1 = "Length: 24 hours (3 days) in-person class"
        point2 = "Effort: 5 hrs/week"
        point3 = "Price: $2500"
        />
      </div>
    );
  }
}

export default Architect;
