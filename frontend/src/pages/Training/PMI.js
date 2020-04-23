import React, { Component } from 'react'
import Header from './Header'
import { BrowserRouter as Router, Link } from "react-router-dom";
import Image from './Image'
export default class PMI extends Component {
	render() {
		return (
			<div className="row" >
		<br />
		<br />
		<Header title="PMI" />
		<br /><br />
		<div className="row">
		<div className="col">
		  	<Link to="/pmp" >
            <Image src="https://images.youracclaim.com/images/260e36dc-d100-45c3-852f-9d8063fa71e6/pmp-600px.png " />
			</Link>
          </div>
          <div className="col">
		  	<Link to="/pmiacp" >	
            <Image src="https://images.youracclaim.com/images/60de4761-84eb-4d9f-a6bc-c290c2e65985/pmi-acp-600px.png" />
			</Link>
          </div>
          <div className="col">
            <Image src="https://mdbootstrap.com/img/Photos/Avatars/img%20(27).jpg" />
          </div>
          <div className="col">
            <Image src="https://mdbootstrap.com/img/Photos/Avatars/img%20(27).jpg" />
          </div>
		
		</div> 
			</div>
		)
	}
}
