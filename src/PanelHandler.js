import React from 'react';
import Panel from './Panel';

export default class PanelHandler extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let cells = [];
    for (let i = 0; i < this.props.num; i++) {
      cells.push(<Panel color={this.props.col[i]} id={i} />);
    }
    return <div className="container">{cells}</div>;
  }
}
