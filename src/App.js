import React, { Component } from "react";
import "./App.css";
import Header from "./Components/Header";
import Users from "./Components/Users";

class App extends Component {
  state = {
    search: "",
    users: []
  };

  filterUsers = () => e => {
    this.setState({
      search: e.target.value.toLowerCase()
    });
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
    let { search, users } = this.state;
    return (
      <div className="App">
        <Header filterUsers={this.filterUsers} users={users} />
        <Users search={search} users={users} />
      </div>
    );
  }
}

export default App;
