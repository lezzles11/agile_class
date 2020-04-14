import Template from "../components/Template";
import React, { Component } from "react";

class SafePortfolio extends Component {
  render() {
    return (
      <div>
        <Template 
        logoimage="" 
        title="SAFe® Portfolio Management" 
        about="A foundational Lean-Agile and Portfolio operations course for SAFe portfolio managers.
        " 
        learn="The SAFe® Portfolio Management corporate training fits hand in glove with Apex’s SAFe Lean Portfolio Manager certificate training. Similar to the certificate training, the course prepares the student to demonstrate their expertise in managing an enterprise-wide portfolio of Agile projects. Instructors draw from their own real-life industry experience to show students key SAFe techniques for establishing a portfolio vision, for performing Lean portfolio budgeting, port and for using portfolio tools like Portfolio Kanban. Students are given an opportunity to practice and apply these same skills with scenarios drawn from actual industry problems. Whereas the certificate training is a foundational level course, the corporate training is far more detailed and specifically targeted for the user’s business challenges.
        In this workshop you will partner and collaborate with other students representing a broad swath of your corporate know-how. Under the expert guidance of experienced facilitators, you will have the opportunity to immerse yourself in several actual business challenges and then learn how SAFE portfolio management techniques can help you manage the many competing requirements that may interfere with delivering value. Alongside a deep dive into the complexities of your organization, you will have the opportunity to see and experience how organizations like yours apply SAFe practices to meet their business challenges.
        " 
        Prerequisites = "Experience in management is highly desired; experience in SAFe or Agile techniques will be beneficial."
        
        />
      </div>
    );
  }
}

export default SafePortfolio;
