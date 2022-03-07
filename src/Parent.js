import React from 'react';

export default class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberPanels: 3,
      colors: ['#ffffff', '#ffffff', '#ffffff']
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
    currentColors.push('#ffffff');
    // Add a panel (no limit lol)
    this.setState({ numberPanels: currentPanels++, colors: currentColors });
  }

  render() {
    return (
      <>
        <h1>Mogus</h1>
      </>
    );
  }
}
