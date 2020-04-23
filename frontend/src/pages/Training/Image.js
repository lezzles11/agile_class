import React from 'react'
import { BrowserRouter as Router, Link } from "react-router-dom";


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
  export default Image