import React, { Component } from "react";
import "./App.css";
import Header from "./Components/Header";
import Users from "./Components/Users";
import Progress from "./Components/Progress";

class App extends Component {
  state = {
    search: "",
    users: [],
    loader: true
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
      )
      .then(() => {
        this.setState({
          loader: !this.state.loader
        });
      });
  }

  render() {
    let { search, users, loader } = this.state;
    return (
      <div className="App">
        <Header filterUsers={this.filterUsers} users={users} />
        <Users search={search} users={users} />
        {loader && <Progress />}
      </div>
    );
  }
}

export default App;
