import React, { Component } from 'react';


class HeaderJs extends Component {
    render() {
        return (
            function Header({ title }) {
  return (
    <div>
      <h4>{title} </h4>
    </div>
  );
}
        );
    }
}

export default HeaderJs;