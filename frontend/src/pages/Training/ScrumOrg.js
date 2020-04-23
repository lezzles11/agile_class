import React, { Component } from 'react'
import Header from './Header'
import { BrowserRouter as Router, Link } from "react-router-dom";
import Image from './Image'

export default class ScrumOrg extends Component {
	render() {
		return (
			<div>
			<div className="row" >
			<br />
			<br />
			<Header title="Scrum.Org" />
			<br /><br />
			</div>
			<div className="row">
			<div className="col">
			  <Link to="/psm" >
			  <Image src="https://www.debooij.training/wp-content/uploads/2020/03/Scrumorg-PSM_outertext-200-1.png" />
			  </Link>
			</div>
			<div className="col">
			  <Link to="/psd" >	
			  <Image src="https://scrumorg-website-prod.s3.amazonaws.com/drupal/inline-images/2019-02/1PSD%20Logo.png" />
			  </Link>
			</div>
			<div className="col">
			  <Link to="/pspo" >
			  <Image src="https://scrumorg-website-prod.s3.amazonaws.com/drupal/inline-images/2019-02/1PSPO%20Logo.png" />
			  </Link>
			</div>
			<div className="col">
			
			</div>
			
			</div> 
				</div>
		)
	}
}
