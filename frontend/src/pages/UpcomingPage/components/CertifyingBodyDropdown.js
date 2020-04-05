import React from "react";
import Dropdown from "./Dropdown";

export default class CertifyingBodyDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      accounts: [
        {
          id: 0,
          title: "SAFe®",
          selected: true,
          key: "accounts",
        },
        {
          id: 1,
          title: "PMI",
          selected: true,
          key: "accounts",
        },
        {
          id: 2,
          title: "Freedom",
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
        title="Certifiying Body"
        list={this.state.accounts}
        toggleItem={this.toggleSelected}
      />
    );
  }
}
