import Template from "../components/Template";
import React, { Component } from "react";

class ValueStreamWorkshop extends Component {
  render() {
    return (
      <div>
        <Template 
        logoimage="https://www.dropbox.com/s/pd7vj63levx83q9/Screen%20Shot%202020-03-15%20at%207.41.35%20PM.png?raw=1" 
        title="Value Stream Corporate Workshop" 
        about="A foundational workshop to introduce the concept of Value Streams." 
        learn="Value Streams are all about implementing practices and optimizing an organization so that it can provide a continuous flow of value to its customers. We find that today’s businesses are too often focused on delivering products and specific product features without taking into consideration their ultimate value to the customer. Value streams start with and focus specifically on business value provided to the customer.
        Understanding value streams becomes increasingly important as the complexity of your organization grows. Drawing upon parallels from the Scaled Agile Framework (SAFe), many of the techniques that help with coordination and interconnection between Agile processes will also be shown effective at coordinating and delivering value at scale.
        In this workshop you will partner and collaborate with other students representing a broad swath of your corporate know-how. Under the expert guidance of experienced facilitators, you will have the opportunity to immerse yourself in several actual business challenges and then learn how value stream coordination can help you manage the many competing requirements that may interfere with delivering value. You will have the opportunity to experience, practice, and apply new ways of thinking about delivering customer value. In demonstrations of complex organizations, you will see how these practices scale to meet your challenges.
        " 
        Prerequisites = "Experience in management is highly desired, whether from IT or from other departments."

        />
      </div>
    );
  }
}

export default ValueStreamWorkshop;
