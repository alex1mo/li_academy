import React, { Component } from "react";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Avatar from "@material-ui/core/Avatar";
import "./index.css";

export default class Details extends Component {
  render() {
    let { notBorder, e, user } = this.props;

    function dateFormat(dateString) {
      dateString = new Date(dateString).toLocaleDateString();
      dateString = dateString.split(".");
      dateString = `${dateString[1]}/${dateString[0]}/${dateString[2]}`;
      return dateString;
    }

    return (
      <TableRow className={e % 2 === 0 ? "dark" : null}>
        <TableCell style={notBorder} colSpan="7">
          <p className="gender">
            {user.name.first[0].toUpperCase() + user.name.first.substr(1)}
            {user.gender === "female" ? (
              <img
                src="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/female-512.png"
                alt="female"
                height="30px"
                className="icon"
              />
            ) : (
              <img
                src="https://vectors.pro/wp-content/uploads/2018/04/user-male-icon-symbol-vector-300x300.png"
                alt="male"
                height="30px"
                className="icon"
              />
            )}
          </p>
          <div className="details">
            <div>
              <p>
                <span className="details-1">Username</span>{" "}
                <span>{user.login.username}</span>
              </p>
              <p>
                <span className="details-1">Registered</span>{" "}
                <span>{dateFormat(user.registered.date)}</span>
              </p>
              <p>
                <span className="details-1">Email</span>{" "}
                <span>{user.email}</span>
              </p>
            </div>
            <div>
              <p>
                <span className="details-1">Adress</span>{" "}
                <span>{user.location.street}</span>
              </p>
              <p>
                <span className="details-1">City</span>{" "}
                <span>{user.location.city}</span>
              </p>
              <p>
                <span className="details-1">Zip Code</span>{" "}
                <span>{user.location.postcode}</span>
              </p>
            </div>
            <div>
              <p>
                <span className="details-1">Birthday</span>{" "}
                <span>{dateFormat(user.dob.date)}</span>
              </p>
              <p>
                <span className="details-1">Phone</span>{" "}
                <span>{user.phone}</span>
              </p>
              <p>
                <span className="details-1">Cell</span> <span>{user.cell}</span>
              </p>
            </div>
            <div>
              <Avatar
                alt="avatar is missing"
                style={{
                  width: "140px",
                  height: "140px",
                  border: "4px solid white"
                }}
                src={user.picture.large}
              />
            </div>
          </div>
        </TableCell>
      </TableRow>
    );
  }
}
