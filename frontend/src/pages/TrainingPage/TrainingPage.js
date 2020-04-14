import React from "react";
import Test from "./Test";
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

function StaticTrainingPage() {
  return (
    <div>
      <div className="row">
        <div className="col">
          <Dropdown
            name="Course Type"
            d1="Scaled Agile 5.0"
            d2="Scrum.org"
            d3="Scrum Alliance"
            d4="Leadership"
            d5="PMI"
            d6="Corporate Training"
          />
        </div>
        <div className="col">
          <Dropdown
            name="Certifying Body"
            d1="Scrum Alliance"
            d2="SAFe"
            d3="Scrum.org"
            d4="PMI"
          />
        </div>
        <div className="col">
          <Dropdown
            name="Role"
            d1="Scrum Master"
            d2="Product Owner"
            d3="Business Analyst"
            d4="Developer"
            d5="Quality Assurance"
          />
        </div>
      </div>
      <br />

      <br />
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

      <br />
      <Header title="Scaled Agile 5.0" />
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

      <br />
      <Header title="Scrum.org" />
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
      <br />
      <Header title="Scrum Alliance" />
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
      <br />
      <Header title="PMI" />
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
      <br />
      <Header title="Corporate Training" />
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
  );
}
class TrainingPage extends React.Component {
  render() {
    return (
      <div className="container">
        <Test />

        <br />
        <br />
      </div>
    );
  }
}
export default TrainingPage;
