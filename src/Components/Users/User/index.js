import React, { Component, Fragment } from "react";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Icon from "@material-ui/core/Icon";
import Details from "./Details";
import "./index.css";

export default class User extends Component {
  render() {
    let { user, e, openDetails, open } = this.props;

    let notBorder = {
      border: "none"
    };

    return (
      <Fragment>
        <TableRow
          className={e % 2 === 0 ? "styleRow dark" : "styleRow"}
          onClick={openDetails(e)}
          open={open}
        >
          <TableCell style={notBorder}>
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
          <TableCell style={notBorder}>
            {user.name.last[0].toUpperCase() + user.name.last.substr(1)}
          </TableCell>
          <TableCell style={notBorder}>
            {user.name.first[0].toUpperCase() + user.name.first.substr(1)}
          </TableCell>
          <TableCell style={notBorder}>{user.login.username}</TableCell>
          <TableCell style={notBorder}>{user.phone}</TableCell>
          <TableCell style={notBorder}>{user.location.state}</TableCell>
          <TableCell style={notBorder}>
            <Icon
              style={{
                fontSize: "55px",
                fontWeight: "bolder",
                color: "#00000080"
              }}
            >
              <span>{open ? "-" : "+"}</span>
            </Icon>
          </TableCell>
        </TableRow>
        {open && <Details e={e} notBorder={notBorder} user={user} />}
      </Fragment>
    );
  }
}
