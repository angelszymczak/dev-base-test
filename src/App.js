import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import axios from "axios";

import UserList from "./components/UserList";

class App extends Component {
  // default state object
  state = {
    users: []
  };

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        // create an array of users only with relevant data
        const newUsers = response.data.map(c => {
          return {
            id: c.id,
            name: c.name
          };
        });

        // create a new "state" object without mutating
        // the original state object.
        const newState = Object.assign({}, this.state, {
          users: newUsers
        });

        // store the new state object in the component's state
        this.setState(newState);
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React User Manager</h1>
        </header>

        <UserList users={this.state.users} />
      </div>
    );
  }
}

export default App;
