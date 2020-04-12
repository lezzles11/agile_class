import React from "react";
import Dropdown from "./Dropdown";

export default class RoleDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      accounts: [
        {
          id: 0,
          title: "Scrum Master",
          selected: true,
          key: "accounts",
        },
        {
          id: 1,
          title: "Software Engineer",
          selected: true,
          key: "accounts",
        },
      ],
    };
    this.toggleSelected = this.toggleSelected.bind(this);
  }

  toggleSelected(id, key) {
    const selectedAccounts = [];
    let temp = this.state[key];
    temp[id].selected = !temp[id].selected;
    this.setState({
      [key]: temp,
    });
    this.state.accounts.forEach((account) => {
      if (account.selected === true) {
        selectedAccounts.push(account.title);
      }
    });
    this.props.dispatch({
      type: "SET_ACCOUNTS_FILTER",
      accounts: selectedAccounts,
    });
  }

  render() {
    return (
      <Dropdown
        title="Role"
        list={this.state.accounts}
        toggleItem={this.toggleSelected}
      />
    );
  }
}
