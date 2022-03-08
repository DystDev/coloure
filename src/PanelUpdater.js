import React from 'react';
import './PanelUpdater.css';
import './Global.css';

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
      <>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap"
          rel="stylesheet"
        ></link>
        <button onClick={this.handleClick} className="updateButton">
          ↺
        </button>
      </>
    );
  }
}
