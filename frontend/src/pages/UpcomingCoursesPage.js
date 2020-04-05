import React from "react";
import ReactCalendar from "../components/ReactCalendar";

function Calendar() {
  return (
    <div className="row">
      <div className="col"></div>
      <div className="col">
        {" "}
        <ReactCalendar />
      </div>

      <div className="col"></div>
    </div>
  );
}

function EachCourse({ courseName, location, instructorName, day, month }) {
  return (
    <div className="container">
      <br />
      <br />
      <div className="card">
        <br />
        <div className="card-body">
          <div className="row">
            <div className="col-1"></div>
            <div className="col-2">
              <br />
              <h2>
                {" "}
                {month} <br />
                <br /> {day}
              </h2>
            </div>
            <div className="col-1"></div>
            <div className="col-5">
              <h1 className="card-title">{courseName}</h1>
              <h2>{location}</h2>

              <h2>{instructorName}</h2>
            </div>
          </div>
          <br />
        </div>
      </div>
    </div>
  );
}
function SearchFilter({ button }) {
  return <div className="btn"> {button} </div>;
}

function SearchBar() {
  return (
    <div className="card">
      <div className="card-body">
        {" "}
        <br />
        <h4 className="card-title">Filter Events</h4>
        <br />
        <SearchFilter button="Course Types" />
        <br />
        <br />
        <SearchFilter button="Cities" />
        <br />
        <br />
        <SearchFilter button="Instructors" />
        <br />
        <br />
        <SearchFilter button="Month" />
        <br />
        <br />
        <div className="right"> Clear Filters</div>
      </div>
    </div>
  );
}

class CourseTable extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container">
        <div className="ctr header">
          <br />
        </div>
        <Calendar />

        <div className="row">
          <div className="col-3">
            <br />
            <br />
            <SearchBar />
          </div>
          <div className="col-9">
            <EachCourse
              courseName="Agile"
              month="Dec"
              day="11"
              location="Boston"
              instructorName="Raj"
            />
            <EachCourse
              courseName="Agile"
              month="Dec"
              day="11"
              location="Boston"
              instructorName="Raj"
            />
          </div>
        </div>
      </div>
    );
  }
}

const Courses = [
  {
    courseName: "Agile",
    month: "Feb",
    day: "15",
    location: "Taiwan",
    instructorName: "Mr. Raj",
  },
  {
    courseName: "Agile",
    month: "Feb",
    day: "15",
    location: "Taiwan",
    instructorName: "Mr. Raj",
  },
];
export default class UpcomingCoursesPage extends React.Component {
  render() {
    return (
      <div className="container">
        <CourseTable />
      </div>
    );
  }
}
