import React, { Component } from "react";
import Calendar from "react-calendar";

class ReactCalendar extends Component {
  state = {
    date: new Date()
  };

  onChange = date => this.setState({ date });

  render() {
    return (
      <div className="container">
        <div className="font15">
          <Calendar onChange={this.onChange} value={this.state.date} />
        </div>
      </div>
    );
  }
}
export default ReactCalendar;
