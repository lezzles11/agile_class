import Template from "../components/Template";
import React, { Component } from "react";

class PSPO extends Component {
  render() {
    return (
      <div>
        <Template
          logoimage="https://scrumorg-website-prod.s3.amazonaws.com/drupal/inline-images/2019-02/1PSPO%20Logo.png"
          title="Professional Scrum Product Owner"
          about="A course to prepare for Professional Scrum Product Owner Certification"
          learn="This two-day course is intended for those with a background in the software industry, whether or not you have previous experience as a product owner. From the product owner’s perspective we examine the key concepts behind iterative software development in an Agile Scrum environment. Our instructors provide real examples from industry that demonstrate the product owner’s roles and responsibilities. From creating user stories to managing product backlogs, to demonstrating value and incremental and iterative delivery, the product owner’s role is clearly explained Our instructors also cover the daily responsibilities of Agile team members and their use of Scrum, Kanban, and Extreme Programming."
          point1="The highest passing rates: The PSPO certification exam is rigorous, but you will be prepared. Nearly 100% of our graduates pass the exam on their very first attempt. In the unlikely event that you would need to retake the exam, a second trial is free and additional examinations are discounted."
          point2="Free follow-up access to your course materials for one year."
          point3="25% discount on future course fees. Save on courses as you sail through the certification process."
          point4="Anytime availability: Your course are available over the Internet 7 days a week and 24 hours a day. Study at any day and time you want. Once you are ready, simply sign up to take the certification exam!"
          point5="Prerequisites: Some experience with Agile software development principles and practices will be helpful, whether from actual industry experience or reading."
        />
      </div>
    );
  }
}

export default PSPO;
