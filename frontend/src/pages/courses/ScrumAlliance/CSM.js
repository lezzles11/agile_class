import Template from "../components/Template";
import React, { Component } from "react";

class CSM extends Component {
  render() {
    return (
      <div>
        <Template 
        logoimage="https://www.dropbox.com/s/r6m4otcvvj7tjsq/CSM_Logo.jpeg?raw=1" 
        title="CSM – Certified ScrumMaster®" 
        about="A Certified ScrumMaster® is able to assist a scrum team to perform at their optimum level, as well as buffering the team from distractions.  The certification process teaches the Scrum framework and enables CSMs to expand their career opportunities using Agile practices." 
        learn="After successfully completing the course, participants will have an understanding of team roles, events and artifacts.  They will be eligible to take CSM test, and upon passing the test, will be asked to accept the CSM License Agreement and complete their Scrum Alliance profile."
        point1 = "Length: 16 hours (2 days) in-person class, or 25 hours in-person coaching" 
        point2 = "Effort: 5 hrs/week"
        point3 = "Price: $1000"
        
        
        
        />
      </div>
    );
  }
}

export default CSM;
