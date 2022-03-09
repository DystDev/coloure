import React from 'react';
import { ntc } from './ntc/ntc.js';
import './ShareHandler.css';
export default class ShareHandler extends React.Component {
  render() {
    let cArr = this.props.colors;
    let result = [];
    for (let i = 0; i < cArr.length; i++) {
      let n_match = ntc.name(cArr[i]);
      result.push(
        <p className="shareText">
          {cArr[i]} - {n_match[1]}
        </p>
      );
    }
    return result;
  }
}
