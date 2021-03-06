import React, { Component } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import User from "./User";

export default class Users extends Component {
  state = {
    open: false
  };

  openDetails = elem => e => {
    if (e.currentTarget.hasAttribute("open")) {
      elem = false;
    }
    this.setState({
      open: elem
    });
  };

  render() {
    let { search, users, error, loader } = this.props;

    let styleUsers = {
      background: "transparent",
      margin: "0 20px",
      boxShadow: "none",
      minHeight: !error && !loader && "calc(100vh - 80px)"
    };

    let styleHeaderRow = {
      fontSize: "15px",
      fontWeight: "bolder",
      color: "#000000a6"
    };

    return (
      <Paper className="Users" style={styleUsers}>
        <Table padding="none">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell style={styleHeaderRow}>Last</TableCell>
              <TableCell style={styleHeaderRow}>First</TableCell>
              <TableCell style={styleHeaderRow}>Username</TableCell>
              <TableCell style={styleHeaderRow}>Phone</TableCell>
              <TableCell style={styleHeaderRow}>Location</TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {users
              .filter((user, e) => {
                let name = user.name.first;
                return name.substr(0, search.length) === search;
              })
              .map((user, e) => {
                return (
                  <User
                    key={user.login.username + `${e}`}
                    user={user}
                    e={e}
                    open={this.state.open === e}
                    openDetails={this.openDetails}
                  />
                );
              })}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}
