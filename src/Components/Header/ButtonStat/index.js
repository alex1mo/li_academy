import React, { Component } from "react";
import Button from "@material-ui/core/Button";

export default class ButtonStat extends Component {
  render() {
    let { chartOpen, chart, error } = this.props;
    return (
      <Button
        variant="contained"
        component="span"
        onClick={chartOpen(chart)}
        disabled={error}
      >
        Show chart
      </Button>
    );
  }
}
