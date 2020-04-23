import React, { Component } from 'react'
import Header from './Header'
import { BrowserRouter as Router, Link } from "react-router-dom";
import Image from './Image'
export default class Leadership extends Component {
	render() {
		return (
			<div> 
			<div className="row" >
			<br />
			<br />
			<Header title="Leadership" />
			<br /><br />
			</div> 

			<div className="row">
			<div className="col">
			<Link to="/csd" >
            <Image src="https://www.dropbox.com/s/vafhd26njihf5jc/CSD_Logo.png?raw=1" />
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
