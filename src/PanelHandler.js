import React from 'react';
import Panel from './Panel';
import './PanelHandler.css';
export default class PanelHandler extends React.Component {
  render() {
    let cells = [];
    for (let i = 0; i < this.props.num; i++) {
      cells.push(<Panel color={this.props.col[i]} key={i} />);
    }
    return <div className="container">{cells}</div>;
  }
}
