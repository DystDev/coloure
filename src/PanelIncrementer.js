import React from 'react';
import './PanelIncrementer.css';

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
