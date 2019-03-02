import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import "./index.css";

class Progress extends Component {
  render() {
    return (
      <div className="loader">
        <CircularProgress disableShrink={true} size={150} />
      </div>
    );
  }
}

const styles = theme => {
  return (theme.palette.primary.main = "#000000bd");
};

export default withStyles(styles)(Progress);
