import React from 'react';
import './Logo.css';
import './Global.css';

export default class Logo extends React.Component {
  render() {
    return (
      <>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap"
          rel="stylesheet"
        ></link>
        <p className="logo">Coloure</p>
      </>
    );
  }
}
