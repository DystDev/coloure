import React from 'react';
import PanelHandler from './PanelHandler';
import PanelUpdater from './PanelUpdater';
import PanelIncrementer from './PanelIncrementer';
import Logo from './Logo'
export default class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberPanels: 5,
      colors: ['#149274', '#f36234', '#1f84a6', '#06f85b', '#555555']
    };
    this.removePanel = this.removePanel.bind(this);
    this.addPanel = this.addPanel.bind(this);
    this.updatePanels = this.updatePanels.bind(this);
  }

  removePanel() {
    // Current number of panels
    let currentPanels = this.state.numberPanels;
    let currentColors = this.state.colors;
    if (currentPanels === 1) {
      return;
    }
    currentColors.pop();
    // If there is one panel, then reject and keep numberPanels at 1
    this.setState({
      numberPanels: --currentPanels,
      colors: currentColors
    });
  }

  addPanel() {
    // Current number of panels
    let currentPanels = this.state.numberPanels;
    let currentColors = this.state.colors;
    if (currentPanels === 12) {
      return;
    }
    let randomColor = this.getRandomHex();
    currentColors.push(randomColor);
    // Add a panel (no limit lol)
    this.setState({ numberPanels: ++currentPanels, colors: currentColors });
  }

  updatePanels() {
    let numToUpdate = this.state.numberPanels;
    let arr = [];
    for (let i = 0; i < numToUpdate; i++) {
      arr.push(this.getRandomHex());
    }
    this.setState({ colors: arr });
  }

  getRandomHex() {
    return (
      '#' + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, '0')
    );
  }

  render() {
    return (
      <>
        <PanelHandler num={this.state.numberPanels} col={this.state.colors} />
        <PanelUpdater onClick={this.updatePanels} />
        <PanelIncrementer onAdd={this.addPanel} onRemove={this.removePanel} />
        <Logo />
      </>
    );
  }
}
