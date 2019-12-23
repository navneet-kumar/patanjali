import React, { Component } from "react";
import pLogo from "./Om-logo.png";

export default class PatanjaliHeader extends Component {
  render() {
    return (
      <header style={{ display: "flex" }}>
        <img style={{ width: "10vh", padding: "1%" }} src={pLogo} alt="logo" />
        <h1 style={{ fontsize: "40vw", color: "#991b31" }}>
          Patanjali Japan Foundation
        </h1>
      </header>
    );
  }
}
