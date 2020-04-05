import Template from "../components/Template";
import React, { Component } from "react";

class PSD extends Component {
  render() {
    return (
      <div>
        <Template
          logoimage="https://scrumorg-website-prod.s3.amazonaws.com/drupal/inline-images/2019-02/1PSD%20Logo.png"
          title="Professional Scrum Developer"
          about="Preparation for Scrum.org’s certification as a Professional Scrum Developer"
          learn="Apex’s Professional Scrum Developer training is your pathway to Scrum Certification!
          Apex’s Professional Scrum Developer training course prepares you for Scrum.org’s Professional Scrum Developer examination. You will learn from the best: our training is given by industry experts who have decades of experience applying Agile Scrum at leading companies like IBM, edX, PricewaterhouseCoopers, and Boston Consulting Group. In addition, Apex’s founder, Raj Heda, is currently on the faculty at Boston University and Brandeis University.
           
          The Professional Scrum Developer training provides an in-depth understanding of the most important Scrum lessons, drawing from classic texts like the Agile Manifesto and the Scrum Guide, by Ken Schwaber and Jeff Sutherland. The course is hands-on, with activities drawn from real-world situations. You will be a member of an Agile team, face real-world challenges, and participate in an actual iterative development effort. All the while, our expert trainers will be there to demonstrate proper technique and to guide you to prepare for the certification exam.
           
          Unlike any other training program, we offer the following bonuses:
          "

          point1 = "The highest passing rates: The PSD certification exam is rigorous, but you will be prepared. Nearly 100% of our graduates pass the exam on their very first attempt. In the unlikely event that you would need to retake the exam, a second trial is free and additional examinations are discounted."
          point2 = "Free follow-up access to your course materials for one year."
          point3 = "25% discount on future course fees. Save on courses as you sail through the certification process."
          point4 = "Anytime availability: Your course are available over the Internet 7 days a week and 24 hours a day. Study at any day and time you want. Once you are ready, simply sign up to take the certification exam!"
          
        />
      </div>
    );
  }
}

export default PSD;
