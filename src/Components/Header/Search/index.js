import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";
import "./index.css";

export default class Search extends Component {
  render() {
    let { filterUsers } = this.props;
    let theme = createMuiTheme({
      palette: {
        primary: grey
      },
      typography: { useNextVariants: true }
    });

    return (
      <MuiThemeProvider theme={theme}>
        <TextField
          label={
            <div
              style={{
                display: "flex",
                alignItems: "center"
              }}
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/meta/thumb/7/7e/Vector_search_icon.svg/554px-Vector_search_icon.svg.png"
                alt="search"
                style={{ width: "20px", height: "20px", paddingRight: "5px" }}
              />
              <span>First name</span>
            </div>
          }
          variant="outlined"
          margin="normal"
          onChange={filterUsers()}
        />
      </MuiThemeProvider>
    );
  }
}
