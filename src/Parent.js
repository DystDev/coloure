import React from 'react';
import NameUpdater from './NameUpdater';
import NameDisplayer from './NameDisplayer';
export default class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tempName: '',
      accName: '',
      primaryColor: '#c1ff9b',
      secondaryColor: '#fface4'
    };
    this.newName = this.newName.bind(this);
    this.setName = this.setName.bind(this);
  }

  newName(name) {
    this.setState({ tempName: name });
  }

  setName() {
    let randomColorPrimary = Math.floor(Math.random() * 16777215).toString(16);
    let randomColorSecondary = Math.floor(Math.random() * 16777215).toString(
      16
    );
    this.setState({
      accName: this.state.tempName,
      primaryColor: `#${randomColorPrimary}`,
      secondaryColor: `#${randomColorSecondary}`
    });
  }

  render() {
    return (
      <>
        <NameUpdater
          onChange={this.newName}
          onSet={this.setName}
          color={this.state.primaryColor}
        />
        <NameDisplayer
          name={this.state.accName}
          color={this.state.secondaryColor}
        />
      </>
    );
  }
}
