import React, { Component } from 'react'
import Header from './Header'
import { BrowserRouter as Router, Link } from "react-router-dom";
import Image from './Image'
export default class ScrumAlliance extends Component {
	render() {
		return (
			<div>
			<div className="row" >
			<br />
			<br />
			<Header title="Scrum Alliance" />
			<br /><br />
			</div>
			<div className="row">
			<div className="col">
			<Link to="/advancedscrummaster" >
			  <Image src="https://www.dropbox.com/s/13ldvrpmpofm8rz/SASM.png?raw=1" />
			  </Link>
			</div>
			<div className="col">
			<Link to="/cspo" >
            <Image src="https://www.dropbox.com/s/6a39mnbzc0jxev8/CSPO_Logo.png?raw=1" />
			</Link>
			</div>
			<div className="col">
			<Link to="/csd" >
            <Image src="https://www.dropbox.com/s/vafhd26njihf5jc/CSD_Logo.png?raw=1" />
			</Link>
			</div>
			<div className="col">
				
			</div>
			
			</div> 
			<br />
				</div>
		)
	}
}
