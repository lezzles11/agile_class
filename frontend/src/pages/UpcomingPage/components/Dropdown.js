import React from "react";
import onClickOutside from "react-onclickoutside";

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listOpen: false,
      headerTitle: this.props.title,
    };
  }

  handleClickOutside() {
    this.setState({
      listOpen: false,
    });
  }

  toggleList() {
    this.setState((prevState) => ({
      listOpen: !prevState.listOpen,
    }));
  }

  render() {
    const { list, toggleItem } = this.props;
    const { listOpen, headerTitle } = this.state;
    return (
      <div className="dd-wrapper">
        <div className="dd-header" onClick={() => this.toggleList()}>
          <div className="dd-header-title">{headerTitle}</div>
          {/* {listOpen
              ? <FontAwesome name="angle-up" size="2x"/>
              : <FontAwesome name="angle-down" size="2x"/>
            } */}
        </div>
        <div className="dd-list-wrapper">
          {listOpen && (
            <ul className="dd-list">
              {list.map((item) => (
                <li
                  className="dd-list-item"
                  key={item.title}
                  onClick={() => toggleItem(item.id, item.key)}
                >
                  {item.title} {item.selected && " &"}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    );
  }
}

export default onClickOutside(Dropdown);
