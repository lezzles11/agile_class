import React from "react";
import Test from "./Test";
import { Select } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';


import {
  MDBDropdown,
  MDBDropdownToggle,
  MDBBtn,
  MDBBtnGroup,
  MDBDropdownMenu,
  MDBDropdownItem,
} from "mdbreact";

function Header({ title }) {
  return (
    <div>
      <h4>{title} </h4>
    </div>
  );
}
function Dropdown({ name, d1, d2, d3 }) {
  return (
    <MDBDropdown>
      <MDBDropdownToggle caret color="primary">
        {name}
      </MDBDropdownToggle>
      <MDBDropdownMenu basic>
        <MDBDropdownItem>{d1}</MDBDropdownItem>
        <MDBDropdownItem>{d2}</MDBDropdownItem>
        <MDBDropdownItem>{d3}</MDBDropdownItem>
      </MDBDropdownMenu>
    </MDBDropdown>
  );
}

function Image({ name, title, src }) {
  const size = {
    width: "50%",
  };
  return (
    <div className="text-center">
      <img
        style={size}
        src={src}
        alt="avatar mx-auto white"
        className="rounded-circle img-fluid"
      />
      <br />
    </div>
  );
}

function Leadership() {
	return (
		<div> 
		<Header title="Leadership" />
		<br />
		<div className="row">
		  <div className="col">
			<Image src="https://mdbootstrap.com/img/Photos/Avatars/img%20(27).jpg" />
		  </div>
		  <div className="col">
			<Image src="https://mdbootstrap.com/img/Photos/Avatars/img%20(27).jpg" />
		  </div>
		  <div className="col">
			<Image src="https://mdbootstrap.com/img/Photos/Avatars/img%20(27).jpg" />
		  </div>
		  <div className="col">
			<Image src="https://mdbootstrap.com/img/Photos/Avatars/img%20(27).jpg" />
		  </div>
		</div>
		<br />
		</div> 
  
	)
}
class StaticTrainingPage extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
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
  return (
    <div>
      <div className="row">
        <div className="col">
		<Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          onChange={this.courseTypeChange}
        >
          <MenuItem value="scaled">Scaled Agile 5.0</MenuItem>
          <MenuItem value="org">Scrum.org</MenuItem>
          <MenuItem value="alliance">Scrum Alliance</MenuItem>
        </Select>

        </div>
        <div className="col">
		<Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          onChange={this.certifyingBodyChange}
        >
          <MenuItem value="alliance">Scrum Alliance</MenuItem>
          <MenuItem value="safe">SAFe</MenuItem>
		  <MenuItem value="PMI">PMI</MenuItem>
        </Select>
        </div>
        <div className="col">
		<Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          onChange={this.roleChange}
        >
          <MenuItem value="leadership">Leadership</MenuItem>

          <MenuItem value="corporate">Corporate Training</MenuItem>
        </Select>
        </div>
      </div>
      <br />
	  {(type === "" && body === "" && role === "") && <div> <Scaled /><ScrumOrg /><ScrumAlliance /><Safe /><PMI /> <Leadership /> <CorporateTraining /></div>}
	{type === "scaled" && <Scaled />}
	{type === "org" && <ScrumOrg />}
	{(type === "alliance" || body === "alliance") && <ScrumAlliance />}

	{body === "safe" && <Safe />}
	{body === "PMI" && <PMI />}
	{role === "leadership" && <Leadership />}
	{role === "corporate" && <CorporateTraining />}


   

      <br />
</div>


  );
}
}

function Safe(){
	return (
		<div>
		<br />
		<Header title="Safe" /><br />
		<div className="row">
		  <div className="row">
			<div className="col">
			  <Image src="https://mdbootstrap.com/img/Photos/Avatars/img%20(27).jpg" />
			</div>
			<div className="col">
			  <Image src="https://mdbootstrap.com/img/Photos/Avatars/img%20(27).jpg" />
			</div>
			<div className="col">
			  <Image src="https://mdbootstrap.com/img/Photos/Avatars/img%20(27).jpg" />
			</div>
			<div className="col">
			  <Image src="https://mdbootstrap.com/img/Photos/Avatars/img%20(27).jpg" />
			</div>
		  </div>
		</div>
  
		<br />
		</div>
  
  
	)
}

function Scaled(){
	return (
		<div>
		<br />
		<Header title="Scaled Agile 5.0" />

		<br />
		<div className="row">
		  <div className="row">
			<div className="col">
			  <Image src="https://mdbootstrap.com/img/Photos/Avatars/img%20(27).jpg" />
			</div>
			<div className="col">
			  <Image src="https://mdbootstrap.com/img/Photos/Avatars/img%20(27).jpg" />
			</div>
			<div className="col">
			  <Image src="https://mdbootstrap.com/img/Photos/Avatars/img%20(27).jpg" />
			</div>
			<div className="col">
			  <Image src="https://mdbootstrap.com/img/Photos/Avatars/img%20(27).jpg" />
			</div>
		  </div>
		</div>
  
		<br />
		</div>
  
  
	)
}


function ScrumOrg() {
	return (
		<div>

		<br />
		<Header title="Scrum.org" />

		<br />
		<div className="row">
		  <div className="row">
			<div className="col">
			  <Image src="https://mdbootstrap.com/img/Photos/Avatars/img%20(27).jpg" />
			</div>
			<div className="col">
			  <Image src="https://mdbootstrap.com/img/Photos/Avatars/img%20(27).jpg" />
			</div>
			<div className="col">
			  <Image src="https://mdbootstrap.com/img/Photos/Avatars/img%20(27).jpg" />
			</div>
			<div className="col">
			  <Image src="https://mdbootstrap.com/img/Photos/Avatars/img%20(27).jpg" />
			</div>
		  </div>
		</div>
		</div> 
	)
}
function ScrumAlliance() {
	return (
		<div>
      <br />
      <Header title="Scrum Alliance" />

		<br />
      <div className="row">
        <div className="row">
          <div className="col">
            <Image src="https://mdbootstrap.com/img/Photos/Avatars/img%20(27).jpg" />
          </div>
          <div className="col">
            <Image src="https://mdbootstrap.com/img/Photos/Avatars/img%20(27).jpg" />
          </div>
          <div className="col">
            <Image src="https://mdbootstrap.com/img/Photos/Avatars/img%20(27).jpg" />
          </div>
          <div className="col">
            <Image src="https://mdbootstrap.com/img/Photos/Avatars/img%20(27).jpg" />
          </div>
		<br />
		</div> </div>
</div> 
)
}

function PMI() {
	return (

<div>
      <br />
      <Header title="PMI" />

		<br />
      <div className="row">
        <div className="row">
          <div className="col">
            <Image src="https://mdbootstrap.com/img/Photos/Avatars/img%20(27).jpg" />
          </div>
          <div className="col">
            <Image src="https://mdbootstrap.com/img/Photos/Avatars/img%20(27).jpg" />
          </div>
          <div className="col">
            <Image src="https://mdbootstrap.com/img/Photos/Avatars/img%20(27).jpg" />
          </div>
          <div className="col">
            <Image src="https://mdbootstrap.com/img/Photos/Avatars/img%20(27).jpg" />
          </div>
        </div>
      </div>
	  <br />
</div>
	)

}
function CorporateTraining() {
	return (
		<div> 
      <br />
      <Header title="Corporate Training" />

		<br />
      <div className="row">
        <div className="row">
          <div className="col">
            <Image src="https://mdbootstrap.com/img/Photos/Avatars/img%20(27).jpg" />
          </div>
          <div className="col">
            <Image src="https://mdbootstrap.com/img/Photos/Avatars/img%20(27).jpg" />
          </div>
          <div className="col">
            <Image src="https://mdbootstrap.com/img/Photos/Avatars/img%20(27).jpg" />
          </div>
          <div className="col">
            <Image src="https://mdbootstrap.com/img/Photos/Avatars/img%20(27).jpg" />
          </div>
        </div>
      </div>
	  </div> 
	)
}

class TrainingPage extends React.Component {
  render() {
    return (
      <div className="container">
        <StaticTrainingPage />

        <br />
        <br />
      </div>
    );
  }
}
export default TrainingPage;
