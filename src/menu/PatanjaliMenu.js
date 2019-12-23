import React, { Component } from "react";
import "./PatanjaliMenu.css";

export default class PatanjaliMenu extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <a href=".">Home</a>
          </li>
          <li>
            <a href=".">Our services</a>
          </li>
          <li>
            <a href=".">Products</a>
          </li>
          <li>
            <a href=".">Contact us</a>
          </li>
          <li>
            <a href=".">Join us</a>
          </li>
        </ul>
      </div>
    );
  }
}
