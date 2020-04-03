import React from 'react';
import Dropdown from './Dropdown';

export default class SortDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sortByOptions: [
        {
            id: 0,
            title: 'Date',
            selected: true,
            key: 'sortByOptions'
        },
        {
          id: 1,
          title: 'Amount',
          selected: false,
          key: 'sortByOptions'
        },
      ]
    };
    this.toggleSelected = this.toggleSelected.bind(this);
  };

  toggleSelected(id, key){
    this.state.sortByOptions.map(option => option.selected = false);
    let temp = this.state[key]
    temp[id].selected = true;
    this.setState({
      [key]: temp
    })
    if (this.state[key][id].title === "Date") {
        this.props.dispatch({ type: 'SORT_BY_DATE' });
    } else if (this.state[key][id].title === "Amount") {
        this.props.dispatch({ type: 'SORT_BY_AMOUNT' });
    }
  }

  render() {
    return (
      <Dropdown
        title="Order By"
        list={this.state.sortByOptions}
        toggleItem={this.toggleSelected}
      />
    )
  };
}