import React from "react";
import { Select } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import { BrowserRouter as Router, Link } from "react-router-dom";
import ScrumOrg from './Training/ScrumOrg'
import BusinessAnalyst from './Training/BusinessAnalyst'

import CorporateTraining from './Training/CorporateTraining'
import Developer from './Training/Developer'
import Leadership from './Training/Leadership'
import ProductOwner from './Training/ProductOwner'
import PMI from './Training/PMI'
import QualityAssurance from './Training/QualityAssurance'

import Safe from './Training/Safe'
import ScaledAgile from './Training/ScaledAgile'
import ScrumAlliance from './Training/ScrumAlliance'
import ScrumMaster from './Training/ScrumMaster'

import {
  MDBDropdown,
  MDBDropdownToggle,
  MDBBtn,
  MDBBtnGroup,
  MDBDropdownMenu,
  MDBDropdownItem,
} from "mdbreact";


class TrainingPage extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			role: "Role",
			courseType: "",
			certifyingBody: "",
			role: ""
		}
	}
	courseTypeChange = (e) => {
		console.log(e.target.value)
		this.setState({
			courseType: e.target.value
		})
	}
	certifyingBodyChange = (e) => {
		console.log(e.target.value)
		this.setState({
			certifyingBody: e.target.value
		})
	}
	roleChange = (e) => {
		console.log(e.target.value)
		this.setState({
			role: e.target.value
		})
	}
	render() {
		let type = this.state.courseType; 
		let body = this.state.certifyingBody; 
		let role = this.state.role; 
		let rolelabel = "Type";
		let bodylabel = "Certifying Body"
		let typedown = "Role";
  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
		<InputLabel htmlFor="roledropdown">{rolelabel}</InputLabel>
		<Select
		id="roledropdown"
		  value={rolelabel}
          onChange={this.courseTypeChange}
        >
		  <MenuItem value="alliance">Scrum Alliance</MenuItem>
		  <MenuItem value="leadership">Leadership</MenuItem> 
          <MenuItem value="scaled">Scaled Agile 5.0</MenuItem>
          <MenuItem value="org">Scrum.org</MenuItem>
		  <MenuItem value="pmi">PMI</MenuItem>
		  <MenuItem value="corporate">Corporate Training</MenuItem>
        </Select>

        </div>
        <div className="col-4">
		<InputLabel htmlFor="certifyingdropdown">{bodylabel}</InputLabel>
		<Select

          labelId="certifyingdropdown"
          id="certifyingdropdown"
          onChange={this.certifyingBodyChange}
        >
          <MenuItem value="alliance">Scrum Alliance</MenuItem>
          <MenuItem value="safe">SAFe</MenuItem>
		  <MenuItem value="org">Scrum.Org</MenuItem>
		  <MenuItem value="PMI">PMI</MenuItem>
        </Select>
        </div>
        <div className="col-4">
		<InputLabel htmlFor="typedropdown">{typedown}</InputLabel>
		<Select
          labelId="typedropdown"
          id="typedropdown"
          onChange={this.roleChange}
        >

<MenuItem value="sm">Scrum Master</MenuItem>
<MenuItem value="po">Product Owner</MenuItem>

<MenuItem value="ba">Business Analyst</MenuItem>

<MenuItem value="dev">Developer</MenuItem>

          <MenuItem value="qa">Quality Assurance</MenuItem>
        </Select>
        </div>
      </div>
      <br />
	  {(type === "" && body === "" && role === "") &&(<div><AllComponents /></div>)}
	
	  {type === "scaled" && <ScaledAgile />}

{type === "leadership" && <Leadership />}
{type === "corporate" && <CorporateTraining />}

	{body === "safe" && <Safe /> }

{(body === "org" || type === "org" )&& <ScrumOrg />}
{(body === "alliance" || type === "alliance" )&& <ScrumAlliance />}
{(body === "PMI" || type === "PMI" )&& <PMI />}
	{role === "ba" && <BusinessAnalyst />}
          {role === "sm" && <ScrumMaster />}
          {role === "po" && <ProductOwner />}
          {role === "dev" && <Developer />}
          {role === "qa" && <QualityAssurance />}

      <br />
</div>

  )}
  
}
function AllComponents() {
	return (
		<div>

<Leadership />

<ScaledAgile />
			<BusinessAnalyst />
			<CorporateTraining />
			<Developer />
			<PMI />
			<ProductOwner />
			<QualityAssurance />
			<Safe />
			<ScrumAlliance />
			<ScrumMaster />
			<ScrumOrg />
		</div>
	)
}



export default TrainingPage;
