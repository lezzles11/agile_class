import Template from "../components/Template";
import React, { Component } from "react";

class PSM extends Component {
  render() {
    return (
      <div>
        <Template
          logoimage="https://www.debooij.training/wp-content/uploads/2020/03/Scrumorg-PSM_outertext-200-1.png"
          title="Professional Scrum Master"
          about="Professional Scrum Master training prepares you for Scrum Master Levels 1-3 certification."
          learn="Apex’s Professional Scrum Master training is your pathway to Scrum Certification!
 
 Apex’s Professional Scrum Master training courses prepare you for Scrum.org’s Professional Scrum Master levels 1, 2, and 3 examinations. You will learn from the best: our training is given by industry experts who have decades of experience applying Agile Scrum at leading companies like IBM, edX, PricewaterhouseCoopers, and Boston Consulting Group. In addition, Apex’s founder, Raj Heda, is currently on the faculty at Boston University and Brandeis University.
 "
          point1=" Scrum Master Level 1 certification requires a thorough understanding
            of Scrum fundamentals"
          point2="Scrum Master Level 2 certification requires an advanced mastery of
            both Scrum fundamentals and Scrum practice"
          point3="Scrum Master Level 3 certification requires a detailed mastery of
            Scrum practices."
        />
      </div>
    );
  }
}

export default PSM;
