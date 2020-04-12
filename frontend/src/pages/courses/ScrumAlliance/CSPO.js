import Template from "../components/Template";
import React, { Component } from "react";

class CSPO extends Component {
  render() {
    return (
      <div>
        <Template 
        logoimage="https://www.dropbox.com/s/6a39mnbzc0jxev8/CSPO_Logo.png?raw=1"
        title="CSPO – Certified Scrum Product Owner " 
        about="A Scrum Product Owner generally comes from the business side of the organization.  In the agile world, the product owner not only manages the vision and backlog, they also help focus the team on providing the outcomes that will delight the customers." 
        learn="After successfully completing the course, product owners will have experience as the conduit between the business and the rest of the scrum team.  They’ll learn the skill set that will help them direct the backlog and impart their vision to the team. They will be asked to accept the CSPO License Agreement and complete their Scrum Alliance profile."
        point1 = "Length: 16 hours (2 days) in-person class, or 25 hours in-person coaching"
        point2 = "Effort: 5 hrs/week"
        point3 = "Price: $1000"
        
        
        />
      </div>
    );
  }
}

export default CSPO;
