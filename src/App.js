import React, { Component } from "react";
import "./App.css";
import Header from "./Components/Header";
import Users from "./Components/Users";
import Progress from "./Components/Progress";
import ConectError from "./Components/ConectError";

class App extends Component {
  state = {
    search: "",
    users: [],
    loader: true,
    error: false
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
            users: result.results,
            loader: !this.state.loader
          }),
        error => {
          this.setState({
            loader: !this.state.loader,
            error: !this.state.error
          });
          console.log(error);
        }
      );
  }

  render() {
    let { search, users, loader, error } = this.state;
    return (
      <div className="App">
        <Header filterUsers={this.filterUsers} users={users} error={error} />
        <Users search={search} users={users} loader={loader} error={error} />
        {loader && <Progress />}
        {error && <ConectError />}
      </div>
    );
  }
}

export default App;
