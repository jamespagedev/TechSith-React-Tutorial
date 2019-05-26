import React, { Component } from 'react';
import UniqueId from 'react-html-id';
import './App.css';
import User from './components/User.js';

class App extends Component {
  constructor(props) {
    super(props);
    UniqueId.enableUniqueIds(this);
    this.state = {
      users: [
        { id: this.nextUniqueId(), name: 'John', age: 20 },
        { id: this.nextUniqueId(), name: 'Peter', age: 30 },
        { id: this.nextUniqueId(), name: 'Jill', age: 25 },
        { id: this.nextUniqueId(), name: 'James', age: 26 },
      ]
    }
    console.log(this.state)
  }

  deleteUser = (index, ev) => {
    ev.preventDefault()
    const users = Object.assign([], this.state.users);
    users.splice(index, 1);
    this.setState({ users: users })
  }

  changeUserName = (id, ev) => {
    ev.preventDefault()
    const index = this.state.users.findIndex((user) => {
      return user.id === id
    })
    const user = Object.assign({}, this.state.users[index])

    user.name = ev.target.value;

    const users = Object.assign([], this.state.users)

    users[index] = user;

    this.setState({ users: users })
  }

  render() {
    return (
      <div className="App">
        <ul>
          {
            this.state.users.map((user, index) => {
              return (
                <User
                  key={user.id}
                  age={user.age}
                  delEvent={this.deleteUser.bind(this, index)}
                  changeEvent={this.changeUserName.bind(this, user.id)}
                >{user.name}</User>
              )
            })
          }
        </ul>
      </div>
    );
  }
}

export default App;
