import Template from "../components/Template";
import React, { Component } from "react";

class DevOps extends Component {
  render() {
    return (
      <div>
        <Template 
        logoimage="https://www.dropbox.com/s/v0jdce5ueiac315/SDP.png?raw=1" 
        title="SAFe® DevOps" 
        about="This is a two-day course focused on highlighting the DevOps mindset to enable Agile team members to deliver solutions in a rapidly changing world.  Encompassing problem definition, development, testing, deployment and support, DevOps is crucial to success in the current fast-paced environment.  This course will furnish a strong background in DevOps, not only to developers but also to every member of an agile team." 
        learn="After this two-day intensive course, participants will learn the basics of DevOps, how it fits into the Agile development process, and how to build a customized development/deployment pipeline that works for their organization.  You’ll learn a CALMR approach to DevOps which will enable you to recognize broken processes and not merely automate them.  In addition, you’ll learn a set of tools and practices that will speed and secure your develop/deploy pipeline.  Upon completing the course, you will be eligible to take the Certified SAFe® DevOps Practitioner exam."
        point1 = "Length: 16 hours (2 days) in-person class"
        point2 = "Effort: 5 hrs/week"
        point3 = "Price: $1000"
        
        
        />
      </div>
    );
  }
}

export default DevOps;
