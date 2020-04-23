import React, { Component } from 'react';
import Header from './Header'
import { BrowserRouter as Router, Link } from "react-router-dom";
import Image from './Image'
class BusinessAnalyst extends Component {
	render() {
		return (
			<div>
			<div className="row" >
		<br />
		<br />
		<Header title="Business Analyst" />
		<br /><br />
		</div>
		<div className="row">
		<br />
		<div className="col">
		<Link to="/cspo" >
            <Image src="https://www.dropbox.com/s/6a39mnbzc0jxev8/CSPO_Logo.png?raw=1" />
			</Link>
		</div>
		<div className="col">
		<Link to="/cspo" >
            <Image src="https://www.dropbox.com/s/6a39mnbzc0jxev8/CSPO_Logo.png?raw=1" />
			</Link>
		</div>
		<div className="col">
		<Link to="/safeportfolio" >
            <Image src="https://www.dropbox.com/s/g8ipley2fecp77n/LPM.png?raw=1" />
			</Link>
		</div>
		<div className="col">
		<Link to="/teambuilding" >
            <Image src="https://www.dropbox.com/s/impvkn4vv38zuso/Image%201.png?raw=1" />
			</Link>
		

		</div> 
		</div> 
		<br />
		</div>
		);
	}
}

export default BusinessAnalyst;
