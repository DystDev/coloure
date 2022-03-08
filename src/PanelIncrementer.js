import React from 'react';
import './PanelIncrementer.css';
import './Global.css';
export default class PanelIncrementer extends React.Component {
  constructor(props) {
    super(props);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleAdd() {
    this.props.onAdd();
  }

  handleRemove() {
    this.props.onRemove();
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
        <button onClick={this.handleRemove} className="minusButton">
          -
        </button>
        <button onClick={this.handleAdd} className="addButton">
          +
        </button>
      </>
    );
  }
}
