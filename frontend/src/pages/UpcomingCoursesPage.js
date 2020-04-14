import React from "react";
import ReactCalendar from "../components/ReactCalendar";
import data from "../../src/upcomingCourses.json";

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
const getCourseType = data.map((data) =>{
  return (<div className="container">
      <br />
      <br />
      <div className="card">
        <br />
        <div className="card-body">
          
              <h5 className="card-title">{data.course_name}</h5>
              <br />  
        </div>
      </div>
    </div>)
});

const getAllCountries = data.map((data) =>{
  return (<div className="container">
      <br />
      <br />
      <div className="card">
        <br />
        <div className="card-body">
          
              <h5>{data.location}</h5>
              <br /> 
        </div>
      </div>
    </div>)
})
const getAllCities = data.map((data) =>{
  return (<div className="container">
      <br />
      <br />
      <div className="card">
        <br />
        <div className="card-body">
         
              <h5>{data.location}</h5>
              <h5>{data.instructor}</h5>
            
          <br />
        </div>
      </div>
    </div>)
})
const getAllTrainers = data.map((data) =>{
  return (<div className="container">
      <br />
      <br />
      <div className="card">
        <br />
        <div className="card-body">

              <h5>{data.instructor}</h5>
            
          <br />
        </div>
      </div>
    </div>)
})
const getAllPartners = data.map((data) =>{
  return (<div className="container">
      <br />
      <br />
      <div className="card">
        <br />
        <div className="card-body">
          
              <h5>{data.instructor}</h5>
            
          <br />
        </div>
      </div>
    </div>)
})

const NewData = data.map((data) =>{
  return (<div className="container">
      <br />
      <br />
      <div className="card">
        <br />
        <div className="card-body">
          <div className="row">
            <div className="col-1"></div>
            <div className="col-2">
              <br />
              <h5 className="text-center">
                {" "}
                {data.dates[0].month} <br />
                <br /> {data.dates[0].day}
              </h5>
            </div>
            <div className="col-1"></div>
            <div className="col-5">
              <h5 className="card-title">{data.course_name}</h5>
              <h5>{data.location}</h5>
              <h5>{data.instructor}</h5>
            </div>
          </div>
          <br />
        </div>
      </div>
    </div>)
})

function EachCourse({ courseName, location, instructorName, day, month }) {
  return (
    <div className="container">
      <br />
      <br />
      <div className="card">
        <br />
        <div className="card-body">
            
              <h5 className="">{courseName}</h5>
             
          <br />
        </div>
      </div>
    </div>
  );
}
function SearchFilter({ button }) {
  return <div className="btn btn-color"> {button} </div>;
}

function SearchBar() {
  return (
    <div className="card">
      <div className="card-body">
        {" "}
        <br />
        <h4 className="card-title">Filter Events</h4>
        <br />
        <SearchFilter button="All Courses" onClick={NewData}/>
        <br />
        <br />
        <SearchFilter button="All Course Types" onClick={getCourseType}/>
        <br />
        <br />
        <SearchFilter button="Calendar" />
        <br />
        <br />
        <SearchFilter button="All Countries" onClick={getAllCountries}/>
        <br />
        <br />
        <SearchFilter button="Cities" onClick={getAllCities}/>
        <br />
        <br />
        <SearchFilter button="All Trainers" onClick={getAllTrainers}/>
        <br />
        <br />
        <SearchFilter button="All Partners" onClick={getAllPartners}/>
        <br />
        <br />
        <div className="right-align" onClick={NewData}> <a>Clear Filters</a></div>
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
              courseName=  {NewData[0]}
            />
            <EachCourse
              courseName={NewData[1]}
            />
            <EachCourse
              courseName={NewData[2]}
            />
            <EachCourse
              courseName={NewData[3]}
            />
            <EachCourse
              courseName={NewData[4]}
            />
          </div>
          
        </div>
      </div>
    );
  }
}

export default class UpcomingCoursesPage extends React.Component {
  render() {
    return (
      <div className="container">
        <CourseTable />
      </div>
    );
  }
}
