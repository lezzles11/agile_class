import React, { Component } from "react";
import FirstColumn from "../components/FirstColumn";
import SecondColumn from "../components/SecondColumn";
import FirstRow from "../components/FirstRow";

class PMIACP extends Component {
  render() {
    return (
      <div className="container">
        <FirstRow
          url="https://images.youracclaim.com/images/60de4761-84eb-4d9f-a6bc-c290c2e65985/pmi-acp-600px.png"
          title="PMI Agile Certified Practitioner"
        />
        <br />
        <br />
        <div className="row">
          <div className="col">
            <FirstColumn
              text1="A foundational course for the PMI-ACP certificate"
              text2="In this two day course, you will learn about the best practices and principles of Agile. The Agile way of working is taking multiple industries by storm, and being equipped with a proper understanding of the various Agile methodologies is key to being successful in the current market.
 
 This course will provide you an in-depth look at some of the most popular Agile methodologies, like Scrum, Kanban, extreme programming (XP), test-driven development (TDD) and Lean. Throughout the two days of this training course, you will delve deep into these methodologies, and learn the ins and outs of each. You will be prepared to take the PMI-ACP certification test and gain the PMI-ACP certification, which will demonstrate to your colleagues, bosses, and stakeholders involved in your projects that you have a strong understanding of agile. Possessing the PMI-ACP certification will show that you are able to implement agile principles into the workplace in order to bring your organization and team to market success. 
  
 While anyone can apply for this course or certification, it is geared towards those professionals who have experience working in an agile environment, or those whose team, organization, or enterprise is looking to adopt agile practices. If this describes you, sign up for our course today and prepare yourself to take and pass the PMI-ACP certificate. 
 "
              smalltitle1="Raj Heda"
              smalltext1="Raj Heda has been teaching SAFe Agilist courses for over 20 years. He has extensive experience leading teams in Agile transformation, with successful results. Raj currently teaches at Boston University and Brandeis University in the Boston area. 

"
              smalltitle2="Vishwakarma Jain"
              smalltext2="Vishwakarma Jain has been involved in Agile theory and training for the past ten years. Training is her passion, and she enjoys watching attendees grow during their certification courses. Vishwakarma is currently on staff at Boston Consulting Group, and she also teaches at Harvard University. 
"
            />
          </div>

          <div className="col">
            <SecondColumn
              length="2 days"
              effort=""
              price="$3000"
              col2title1=""
              col2text1="Great course; I learned everything I needed and more! I am excited to implement these skills into my role in my organization. 
"
              col2title2=""
              col2text2="Raj is an excellent instructor, always willing to help and great at explaining concepts. "
              col2text3="This course equipped me with the skills I needed to grow and advance in my career. Many thanks!"
              col2title3=""
              col2text4=" Fantastic experience! Highly recommended! I am looking forward to sharing what I’ve learned with my enterprise. "
              col2title4=""
            />
          </div>
        </div>
      </div>
    );
  }
}

export default PMIACP;
