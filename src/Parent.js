import React from 'react';
import PanelHandler from './PanelHandler';
export default class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberPanels: 4,
      colors: ['#149274', '#f36234', '#1f84a6', '#06f85b']
    };
    this.removePanel = this.removePanel.bind(this);
    this.add = this.addPanel.bind(this);
  }

  removePanel() {
    // Current number of panels
    let currentPanels = this.state.numberPanels;
    let currentColors = this.state.colors;
    currentColors.pop();
    // If there is one panel, then reject and keep numberPanels at 1
    this.setState({
      numberPanels: currentPanels > 1 ? currentPanels-- : 1,
      colors: currentColors
    });
  }

  addPanel() {
    // Current number of panels
    let currentPanels = this.state.numberPanels;
    let currentColors = this.state.colors;
    let randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    currentColors.push(randomColor);
    // Add a panel (no limit lol)
    this.setState({ numberPanels: currentPanels++, colors: currentColors });
  }

  render() {
    return (
      <>
        <PanelHandler num={this.state.numberPanels} col={this.state.colors} />
      </>
    );
  }
}
