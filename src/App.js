import React, { Component } from "react";
import "./App.css";
import Header from "./Components/Header";
import Users from "./Components/Users";

class App extends Component {
  state = {
    search: ""
  };

  filterUsers = () => e => {
    this.setState({
      search: e.target.value.toLowerCase()
    });
  };

  render() {
    let { search } = this.state;
    console.log(this.state.search);
    return (
      <div className="App">
        <Header filterUsers={this.filterUsers} />
        <Users search={search} />
      </div>
    );
  }
}

export default App;
