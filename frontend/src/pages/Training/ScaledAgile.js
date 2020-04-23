import React, { Component } from 'react'
import Header from './Header'
import { BrowserRouter as Router, Link } from "react-router-dom";
import Image from './Image'
export default class ScaledAgile extends Component {
	render() {
		return (
			<div>
			<div className="row" >
			<br />
			<br />
			<Header title="Scaled Agile" />
			<br /><br />
			</div>
			<div className="row">
			<div className="col">
			<Link to="/agilist" >
			  <Image src="https://www.dropbox.com/s/jvxyf4r7k03077e/Leading_SAFe_Logo.png?raw=1" />
			  </Link>
			</div>
			<div className="col">
			<Link to="/agileproductmanager" >
			  <Image src="https://www.dropbox.com/s/x1d9lug8y784kda/APM.png?raw=1" />
			  </Link>
			</div>
			<div className="col">
			<Link to="/advancedscrummaster" >
			  <Image src="https://www.dropbox.com/s/13ldvrpmpofm8rz/SASM.png?raw=1" />
			  </Link>
			</div>
			<div className="col">
			<Link to="/architect" >
			  <Image src="https://www.dropbox.com/s/opshxvbnq65zsu2/ARCH.png?raw=1" />
			  </Link>
			</div>
			
			</div>

			<br /><br />
		<div className="row">
		<div className="col">
		<Link to="/devops" >
			  <Image src="https://www.dropbox.com/s/v0jdce5ueiac315/SDP.png?raw=1" />
			  </Link>
		</div>
		<div className="col">
		<Link to="/gov" >
			  <Image src="https://www.dropbox.com/s/yp99hwpr1f6204l/SGP.png?raw=1" />
			  </Link>
		</div>
		<div className="col">
		<Link to="/leanportfoliomanager" >
			  <Image src="https://www.youracclaim.com/org/scaled-agile/badge/certified-safe-5-lean-portfolio-manager" />
			  </Link>
		</div>
		<div className="col">
		<Link to="/practitioner" >
			  <Image src="https://www.dropbox.com/s/5i5jhii6qtqk3q8/SP.png?raw=1" />
			  </Link>
		</div>
		
		</div> 
		<br />	<br />
		<div className="row">
			<div className="col">
			<Link to="/productmanager" >
			  <Image src="https://www.dropbox.com/s/6p9s06z035pbhae/POPM.png?raw=1" />
			  </Link>
			</div>
			<div className="col">
			<Link to="/programconsultant" >
			  <Image src="https://www.dropbox.com/s/a1pvtw71jelu5zj/SPC.png?raw=1" />
			  </Link>
			</div>
			<div className="col">
			<Link to="/releasetrainengineer" >
			  <Image src="https://www.dropbox.com/s/aaj37uew3lcms5d/RTE.png?raw=1" />
			  </Link>
			</div>
			<div className="col">
			<Link to="/scrummaster" >
			  <Image src="https://www.dropbox.com/s/5mitvf1rw1v83lz/Advance%20Scrum.png?raw=1" />
			  </Link>
			</div>
			
			</div> 

			<br /><br />
			<div className="row">
			<div className="col">
			<Link to="/softwareengineer" >
			  <Image src="https://www.dropbox.com/s/70oji7c1ok87wlz/ASE.png?raw=1" />
			  </Link>
			</div>
			<div className="col">
			<Link to="/leadingsafe" >
			  <Image src="https://www.dropbox.com/s/jvxyf4r7k03077e/Leading_SAFe_Logo.png?raw=1" />
			  </Link>
			</div>
			<div className="col">
			<Link to="/safeforteams" >
			  <Image src="https://www.dropbox.com/s/brlg8wt82kc94fq/SAFE_For_Teams_Logo.png?raw=1" />
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
