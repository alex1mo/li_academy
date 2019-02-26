import React, { Component } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Icon from "@material-ui/core/Icon";
import "./index.css";

export default class Users extends Component {
  state = {
    users: [],
    styleRow: true
  };

  componentDidMount() {
    fetch("https://randomuser.me/api/?results=100", { method: "GET" })
      .then(res => {
        return res.json();
      })
      .then(
        result =>
          this.setState({
            users: result.results
          }),
        error => console.log(error)
      );
  }
  render() {
    let { users } = this.state;

    let styleUsers = {
      background: "transparent",
      margin: "0 20px",
      boxShadow: "none"
    };

    let styleHeaderRow = {
      fontSize: "15px",
      fontWeight: "bolder",
      color: "#000000a6",
      padding: "0"
    };

    return (
      <Paper className="Users" style={styleUsers}>
        <Table>
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
            {users.map((user, e) => (
              <TableRow
                key={user.login.username}
                className={e % 2 === 0 ? "styleRow" : null}
              >
                <TableCell padding="none">
                  <Grid container justify="center" alignItems="center">
                    <Avatar
                      alt="avatar is missing"
                      style={{
                        width: "60px",
                        height: "60px",
                        border: "4px solid white"
                      }}
                      src={user.picture.large}
                    />
                  </Grid>
                </TableCell>
                <TableCell padding="none">
                  {user.name.last[0].toUpperCase() + user.name.last.substr(1)}
                </TableCell>
                <TableCell padding="none">
                  {user.name.first[0].toUpperCase() + user.name.first.substr(1)}
                </TableCell>
                <TableCell padding="none">{user.login.username}</TableCell>
                <TableCell padding="none">{user.phone}</TableCell>
                <TableCell padding="none">{user.location.state}</TableCell>
                <TableCell padding="none">
                  <Icon
                    style={{
                      fontSize: "55px",
                      fontWeight: "bolder",
                      color: "#00000080"
                    }}
                  >
                    +
                  </Icon>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}
