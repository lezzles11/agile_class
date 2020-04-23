import React, { Component } from 'react'
import Header from './Header'
import { BrowserRouter as Router, Link } from "react-router-dom";
import Image from './Image'
export default class ScrumMaster extends Component {
	render() {
		return (
			<div className="row" >
			<br />
			<br />
			<Header title="Scrum Master" />
			<br /><br />
			<div className="row">
			<div className="col">
			<Link to="/advancedscrummaster" >
			  <Image src="https://www.dropbox.com/s/13ldvrpmpofm8rz/SASM.png?raw=1" />
			  </Link>
	
			</div>
			<div className="col">
				
			</div>
			<div className="col">
				
			</div>
			<div className="col">
				
			</div>
			
			</div> 
				</div>
		)
	}
}
