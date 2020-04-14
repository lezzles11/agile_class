import Template from "../components/Template";
import React, { Component } from "react";

class ProductManagementWorkshop extends Component {
  render() {
    return (
      <div>
        <Template 
        logoimage="https://www.dropbox.com/s/3neom8x754hu9ow/Image%202.png?raw=1" 
        title="Product Management Workshop" 
        about="Product Management has been around as long as there have been products, but it has been redefined in the Agile world.  In an Agile framework, product management is redefined to allow for building and deploying products in a new way.  The ability to work with an iterative development cycle and a fast-moving and self-organized team requires a different approach." 
        learn="This workshop highlights the ways that product management in an Agile environment can maintain high standards while taking advantage of the flexibility and quick delivery of value to customers.  Product managers learn how to set a clear vision for the team, guide the backlog, and maintain alignment with the business goals. Using skills from this workshop, project managers and other stakeholders will get first-hand experience in how to identify and prioritize features, manage the backlog, and see that the goals of each program increment are realized."
        point1 = "Length: Customized for each engagement; typically 2-4 working days"
        point2 = "Effort: 3 hrs/day"
        point3 = "Price: $1500/day"
        />
      </div>
    );
  }
}

export default ProductManagementWorkshop;
