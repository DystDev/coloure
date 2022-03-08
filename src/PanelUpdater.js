import React from 'react';
import './PanelUpdater.css';

export default class PanelUpdater extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onClick();
  }

  render() {
    return (
      <button onClick={this.handleClick} className="updateButton">
        ↺
      </button>
    );
  }
}
