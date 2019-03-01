import React, { Component } from "react";
import Button from "@material-ui/core/Button";

export default class ButtonStat extends Component {
  render() {
    let { chartOpen, chart } = this.props;
    return (
      <Button variant="contained" component="span" onClick={chartOpen(chart)}>
        Show chart
      </Button>
    );
  }
}
