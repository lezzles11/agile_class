import React, { Component } from "react";

import Template from "../components/Template";
class InspectAndAdapt extends Component {
  render() {
    return (
      <div>
        <Template 
        logoimage="https://www.dropbox.com/s/ipj4hh60bxrogwt/Image%204.png?raw=1" 
        title="Inspect & Adapt" 
        about="At the core of the Agile principles is the concept of regular reflection and tuning.  Inspect & Adapt takes place at the end of each Program Increment.  All of the stakeholders participate in the event, identifying backlog items for improvement and bolstering the culture of continuous learning.
 
        The Inspect & Adapt workshop will demonstrate how this Agile principle can be implemented in your environment.  From the workshop, you will gain the skills needed to be introspective about your successes and areas needing more focus. 
        " 
        learn="The Inspect & Adapt workshop allows you to release the potential of compounding your triumphs using Agile.  You’ll see how to demonstrate the program increment, how to measure its benefits both qualitatively and quantitatively, and how to master the complicated process of reflection and continuous improvement.
        " 
        point1 = "Length: Customized for each engagement; typically 2-3 working days"
        point2 = "Effort: 3 hrs/day"
        point3 = "Price: $1500/day"
        />
      </div>
    );
  }
}

export default InspectAndAdapt;
