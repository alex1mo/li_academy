import React, { Component } from "react";
import "./index.css";
import Search from "./Search";
import ButtonStat from "./ButtonImg";
import Chart from "./Chart";

export default class Header extends Component {
  state = {
    chart: false
  };

  chartOpen = () => e => {
    this.setState({
      chart: !this.state.chart
    });
  };

  render() {
    let { filterUsers, users } = this.props;
    let { chart } = this.state;

    return (
      <header>
        <Search filterUsers={filterUsers} />
        <ButtonStat chartOpen={this.chartOpen} chart={chart} />
        {chart && (
          <Chart chartOpen={this.chartOpen} chart={chart} users={users} />
        )}
      </header>
    );
  }
}
