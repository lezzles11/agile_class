import React from "react";

function Image({ name, title, src }) {
	return (
		<div className="text-center">
			<img
				src={src}
				alt="avatar mx-auto white"
				className="rounded-circle img-fluid"
			/>
			<br />
			<br />
			<h5>{name}</h5>
			<h6>{title}</h6>
		</div>
	);
}
function AboutUsPage() {
	return (
		<div className="container">
			<div className="row">
				<h1>Our Story</h1>
			</div>
			<div className="card">
				<div className="card-body">
					<div className="card-text">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua. Ut enim ad minim veniam, quis nostrud
						exercitation ullamco laboris nisi ut aliquip ex ea
						commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu
						fugiat nulla pariatur. Excepteur sint occaecat cupidatat
						non proident, sunt in culpa qui officia deserunt mollit
						anim id est laborum
					</div>
				</div>
			</div>
			<br />
			<div className="row">
				<h1>Our Team </h1>
			</div>
			<br />
			<div className="row">
				<br />
				<div className="col">
					<Image
						name="Kristin"
						title="Project Manager"
						src="https://mdbootstrap.com/img/Photos/Avatars/img%20(27).jpg"
					/>
				</div>
				<div className="col">
					<Image
						name="Isabel"
						title="Quality Assurance"
						src="https://mdbootstrap.com/img/Photos/Avatars/img%20(27).jpg"
					/>
				</div>
				<div className="col">
					<Image
						name="Lesley Cheung"
						title="Developer"
						src="https://mdbootstrap.com/img/Photos/Avatars/img%20(27).jpg"
					/>
				</div>
				<div className="col">
					<Image
						name="Kristin"
						title="Project Manager"
						src="https://mdbootstrap.com/img/Photos/Avatars/img%20(27).jpg"
					/>
				</div>
			</div>
			<div className="row">
				<br />
				<div className="col">
					<Image
						name="Kristin"
						title="Project Manager"
						src="https://mdbootstrap.com/img/Photos/Avatars/img%20(27).jpg"
					/>
				</div>
				<div className="col">
					<Image
						name="Kristin"
						title="Project Manager"
						src="https://mdbootstrap.com/img/Photos/Avatars/img%20(27).jpg"
					/>
				</div>
				<div className="col">
					<Image
						name="Kristin"
						title="Project Manager"
						src="https://mdbootstrap.com/img/Photos/Avatars/img%20(27).jpg"
					/>
				</div>
				<div className="col">
					<Image
						name="Kristin"
						title="Project Manager"
						src="https://mdbootstrap.com/img/Photos/Avatars/img%20(27).jpg"
					/>
				</div>
			</div>
		</div>
	);
}
export default AboutUsPage;
