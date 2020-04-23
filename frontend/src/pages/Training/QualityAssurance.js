import React, { Component } from 'react';
import Header from './Header'
import { BrowserRouter as Router, Link } from "react-router-dom";
import Image from './Image'
class QualityAssurance extends Component {
	render() {
		return (
			<div>
			<div className="row" >
		<br />
		<br />
		<Header title="Quality Assurance" />
		<br /><br />
		</div>
		<div className="row">
		<div className="col">
		<Link to="/pmiacp" >	
            <Image src="https://images.youracclaim.com/images/60de4761-84eb-4d9f-a6bc-c290c2e65985/pmi-acp-600px.png" />
			</Link>
		</div>
		<div className="col">
		<Link to="/customizedkanban" >
            <Image src="https://www.dropbox.com/s/ol4ow6tafftc0qm/Image%203.png?raw=1" />
			</Link>
		</div>
		<div className="col">
			
		</div>
		<div className="col">
			
		</div>
		
		</div> 
		<br />
			</div>
		);
	}
}

export default QualityAssurance;
