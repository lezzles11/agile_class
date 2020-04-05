import React, { Component } from "react";

import Template from "../components/Template";
class Agilist extends Component {
  render() {
    return (
      <div>
        <Template 
        logoimage="https://www.dropbox.com/s/jvxyf4r7k03077e/Leading_SAFe_Logo.png?raw=1" 
        title="Certified SAFe® Agilist" 
        about="A foundational course for the Certified SAFe® Agilist certificate" 
        learn="The goal of this two day course is to equip you with the knowledge that is needed in order to be at the forefront of a Lean-Agile enterprise. Leading a Lean-Agile enterprise is a demanding task, and this course will provide you with a deep understanding of the Scaled Agile Framework® (SAFe®), so that you can take that framework and apply it to an enterprise.
        During the course, attendees will learn about how to become masters of Business Agility so that they can use that expertise to rise to the top in the market. Discussions will be centered around how to develop agility within teams and in the technical space, and how to use that agility to reorient how value flows in the organization. Additional discussions and sessions will provide attendees with training on how to embrace a mindset centered around the customer, as well as how to implement design thinking, as they deliver products within an agile methodology. Attendees will also be instructed on how to orchestrate and use PI Planning events, as well as how to manage and direct different Agile Release Trains (ARTs) that run concurrently. Finally, attendees will learn how to execute a Lean Portfolio Management function within their enterprises. 
        Unlike any other training program, we offer the following bonuses:"
        point1 = "The highest passing rates: The Certified SAFe® Agilist certification exam is rigorous, but you will be prepared. Nearly 100% of our graduates pass the exam on their very first attempt. In the unlikely event that you would need to retake the exam, a second trial is free and additional examinations are discounted."
        point2 = "Free follow-up access to your course materials for one year."
        point3 = "25% discount on future course fees. Save on courses as you sail through the certification process."
        point4 = "Anytime availability: Your courses are available over the Internet 7 days a week and 24 hours a day. Study at any day and time you want. Once you are ready, simply sign up to take the certification exam!"
        Prerequisites = "Highly recommended that participants have 5+ years of experience working in software development, business analysis, testing, project management, or product management fields. Experience working in a Scrum environment is also highly desirable."
        />
      </div>
    );
  }
}

export default Agilist;
