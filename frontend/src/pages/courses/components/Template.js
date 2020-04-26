import React from "react";
import FirstColumn from "./FirstColumn";
import FirstRow from "./FirstRow";
import SecondColumn from "./SecondColumn";
import {
  MDBBtn
} from "mdbreact";

function Template({
  logoimage,
  title,
  effort,
  about,
  learn,
  point1,
  point2,
  point3,
  point4,
  point5,
  point6,
  other,
}) {
  return (
    <div className="container">
      <FirstRow url={logoimage} title={title} />
      <br />
      <br />
      <div className="row">
        <div className="col">
          <FirstColumn
            text1={about}
            text2={learn}
            point1={point1}
            point2={point2}
            point3={point3}
            point4={point4}
            point5={point5}
            point6={point6}
            other={other}
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
            effort={effort}
            price="$3000"
            col2title1=""
            col2text1='"Great course; I learned everything I needed and more! I am excited to implement these skills into my role in my organization."'
            col2title2=""
            col2text2='"Raj is an excellent instructor, always willing to help and great at explaining concepts."'
            col2text3='"This course equipped me with the skills I needed to grow and advance in my career. Many thanks!"'
            col2title3=""
            col2text4='"Fantastic experience! Highly recommended! I am looking forward to sharing what I’ve learned with my enterprise."'
            col2title4=""
          />
        </div>
      </div>
      <div className="text-center pt-5"><MDBBtn color="blue">Register</MDBBtn></div>
    </div>
  );
}

export default Template;
