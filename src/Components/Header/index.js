import React, { Component } from "react";
import "./index.css";
import Search from "./Search";

export default class Header extends Component {
  render() {
    let { filterUsers } = this.props;

    return (
      <header>
        <Search filterUsers={filterUsers} />
        <div />
      </header>
    );
  }
}
