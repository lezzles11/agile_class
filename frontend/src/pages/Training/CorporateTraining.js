import React, { Component } from 'react'
import Header from './Header'
import { BrowserRouter as Router, Link } from "react-router-dom";
import Image from './Image'
export default class CorporateTraining extends Component {
	render() {
		return (
			<div className="row" >
		<br />
		<br />
		<Header title="Corporate Training" />
		<br /><br />
		<div className="row"> <br /> <div className="col">
		  	<Link to="/valuestreamworkshop" >
            <Image src="https://www.dropbox.com/s/pd7vj63levx83q9/Screen%20Shot%202020-03-15%20at%207.41.35%20PM.png?raw=1" />
			</Link>
          </div>
          <div className="col">
		  	<Link to="/safeportfolio" >
            <Image src="https://www.dropbox.com/s/g8ipley2fecp77n/LPM.png?raw=1" />
			</Link>
          </div>
          <div className="col">
		  	<Link to="/programincrementworkshop" >
            <Image src="https://www.dropbox.com/s/pho5ooz3vy8qfh2/Image%205.png?raw=1" />
			</Link>
          </div>
          <div className="col">
		  	<Link to="/inspectandadapt" >
            <Image src="https://www.dropbox.com/s/ipj4hh60bxrogwt/Image%204.png?raw=1" />
			</Link>
          </div>
		</div>
		<br /><br />
		<br /><br />
		<div className="row">
		<div className="col">
		  	<Link to="/productmanagementworkshop" >
            <Image src="https://www.dropbox.com/s/3neom8x754hu9ow/Image%202.png?raw=1" />
			</Link>
          </div>
		  <div className="col">
		  	<Link to="/teambuilding" >
            <Image src="https://www.dropbox.com/s/impvkn4vv38zuso/Image%201.png?raw=1" />
			</Link>
          </div>
		  <div className="col">
		  	<Link to="/customizedkanban" >
            <Image src="https://www.dropbox.com/s/ol4ow6tafftc0qm/Image%203.png?raw=1" />
			</Link>
          </div>
		  <div className="col">
			  
		  </div>




		</div> 

		<br /><br />
			</div>
		)
	}
}
