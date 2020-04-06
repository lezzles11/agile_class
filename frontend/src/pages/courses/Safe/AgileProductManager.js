import Template from "../components/Template";
import React, { Component } from "react";

class AgileProductManager extends Component {
  render() {
    return (
      <div>
        <Template 

        logoimage="https://www.dropbox.com/s/x1d9lug8y784kda/APM.png?raw=1" 
        title="Certified SAFe® Agile Product Manager" 
        about="A foundational course for the Agile Product Manager certificate" 
        learn="This foundational three-day course provides attendees the background required to achieve the Certified SAFe® Agile Product Manager certification. The training is oriented towards product managers, leaders and coaches. Starting with a review of Lean-Agile principles, you will be guided through the intricacies of Agile product management and the challenges for implementing these principles in an enterprise setting.
 
        A Certified SAFe® Agile Product Manager certificate holder will be expected to have a thorough understanding of key Lean-Agile concepts and practices for both software development as well as product management. From the perspective of an Agile product manager, the course prepares the student for advanced leadership and management responsibilities in a enterprise SAFe environment. Course instructors draw from their own real-life experience to immerse the student in actual business scenarios.  From there, instructors guide students to create, manage and deploy ARTs. 
         
        After completing the course, participants will be able to demonstrate their knowledge of the theory and practice needed for product management in a Lean-Agile environment.  All students who successfully complete the course will be prepared to take the Certified SAFe® Product Manager exam.
         
        Unlike any other training program, we offer the following bonuses:
        "
        point1 = "The highest passing rates: The Certified SAFe® Agile Product Manager certification exam is rigorous, but you will be prepared. Nearly 100% of our graduates pass the exam on their very first attempt. In the unlikely event that you would need to retake the exam, a second trial is free and additional examinations are discounted."
        point2 = "Free follow-up access to your course materials for one year."
        point3 = "25% discount on future course fees. Save on courses as you sail through the certification process."
        point4 = "Anytime availability: Your course are available over the Internet 7 days a week and 24 hours a day. Study at any day and time you want. Once you are ready, simply sign up to take the certification exam!"
        Prerequisites = " Experience with managing Agile software development projects is highly desired, whether from actual industry experience or theory. "
        />
      </div>
    );
  }
}

export default AgileProductManager;
