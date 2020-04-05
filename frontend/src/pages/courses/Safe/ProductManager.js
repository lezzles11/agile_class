import React, { Component } from "react";

import Template from "../components/Template";

class ProductManager extends Component {
  render() {
    return (
      <div>
      <Template 
        logoimage="https://www.dropbox.com/s/6p9s06z035pbhae/POPM.png?raw=1" 
        title ="Certified SAFe® Product Owner / Product Manager" 
        about ="A foundational course for the Certified SAFe® Product Owner / Product Manager certificate" 
        learn ="If you are seeking to learn how to become a successful Product Owner or Product Manager within a Lean enterprise, this course is designed for you. In this two day course, you will learn the skills necessary to be able to lead a team to deliver high value as you seek to deliver successful products in your organization.
        Trainers will equip you with the knowledge and understanding you need in order to be an effective Product Owner/Product Manager within the Agile Release Train (ART). You will discover how you can utilize Lean thinking within the Agile process as you break down Epics first into Features, and then into Stories. In addition, you will learn about the refinement process and how to best refine and manage features, stories, and product backlogs within Iterations and any Program Increments set forth by your enterprise. Finally, you will learn about Continuous Delivery and DevOps, and how these two entities add to the ongoing improvement that takes place within the Agile Release Train (ART). 
        Unlike any other training program, we offer the following bonuses: "
        point1 = "The highest passing rates: The Certified SAFe® Product Owner / Product Manager certification exam is rigorous, but you will be prepared. Nearly 100% of our graduates pass the exam on their very first attempt. In the unlikely event that you would need to retake the exam, a second trial is free and additional examinations are discounted."
        point2 = "Free follow-up access to your course materials for one year."
        point3 = "25% discount on future course fees. Save on courses as you sail through the certification process."
        point4 = "Anytime availability: Your courses are available over the Internet 7 days a week and 24 hours a day. Study at any day and time you want. Once you are ready, simply sign up to take the certification exam!"
        Prerequisites ="  Highly recommended that participants attend a course on Leading SAFe®, have work experience in SAFe environment, and have experience in Lean, Agile, or other similar certifications. "
         />
        
      </div>
    );
  }
}

export default ProductManager;
