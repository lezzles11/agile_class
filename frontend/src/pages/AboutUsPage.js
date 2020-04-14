import React from "react";

import Jieqing from "assets/Jieqing.png";
import Kirstin from "assets/Kirstin.jpg";
import Shrutika from "assets/Shrutika.jpg";
import Sneha from "assets/Sneha.jpg";
import Isabel from "assets/Isabel.jpeg";
import Lesley from "assets/Lesley.jpg";
import Raj from "assets/Raj.jpg";

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
            <p>
              Dynamix Agile is a consulting firm that was born in the Boston
              area about ten years ago. Our founder and CEO, Raj Heda, had a
              vision to create a start-up specializing in Agile transformation
              for organizations of any level. Since then, our team has grown, as
              have the services that we offer. It is our privilege and joy to
              offer specialized training and courses that prepare our clients
              for the highest certifications in the industry. We continue to
              offer Agile transformation for organizations through our
              workshops, coaching, and maturity assessments.
            </p>
            <p>
              Since our beginning in Boston in 2010, we have helped bring about
              Agile transformation to over 200 companies, ranging from large
              enterprises to start-ups. Our trainers and coaches are passionate
              about meeting the specific needs of our clients, and we pride
              ourselves on have the best individualized workshops and courses in
              the market today.
            </p>
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
            name="Shrutika Singodia"
            title="Product Owner"
            src={Shrutika}
          />
        </div>
        <div className="col">
          <Image name="Kirstin Tatagiri" title="Scrum Master" src={Kirstin} />
        </div>
        <div className="col">
          <Image name="Sneha Dighe" title="Developer" src={Sneha} />
        </div>
        <div className="col">
          <Image name="Lesley Cheung" title="Developer" src={Lesley} />
        </div>
      </div>
      <div className="row">
        <br />
        <div className="col">
          <Image name="Oscar Chen" title="Developer" src={Lesley} />
        </div>
        <div className="col">
          <Image name="Jieqing Liu" title="UX/UI and BA" src={Jieqing} />
        </div>
        <div className="col">
          <Image name="Isabel Smith" title="QA" src={Isabel} />
        </div>
        <div className="col">
          <Image
            name="Raj Heda"
            title="CEO and Principal Instructor"
            src={Raj}
          />
        </div>
      </div>
    </div>
  );
}
export default AboutUsPage;
