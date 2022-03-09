import React from 'react';
import './ShareCopier.css';
import { ntc } from './ntc/ntc.js';

export default class ShareCopier extends React.Component {
  constructor(props) {
    super(props);
    this.copyToClipboard = this.copyToClipboard.bind(this);
  }

  render() {
    return (
      <button className="copyButton" onClick={this.copyToClipboard()}>
        Copy Result
      </button>
    );
  }

  copyToClipboard() {
    let cArr = this.props.colors;
    let result = [];
    for (let i = 0; i < cArr.length; i++) {
      let n_match = ntc.name(cArr[i]);
      result.push(`\n${i + 1}: ${n_match[1]} - ${cArr[i]}`);
    }
    navigator.clipboard.writeText(result);
  }
}
