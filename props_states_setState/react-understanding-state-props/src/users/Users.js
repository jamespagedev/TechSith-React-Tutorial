import React, { Component } from 'react';
import User from './User.js';

/***************************************************************************************************
 ********************************************* Component *******************************************
 **************************************************************************************************/
class Users extends Component {
  state = {
    users: [
      { name: "John", age: 20 },
      { name: "Jill", age: 30 },
      { name: "Peter", age: 40 },
      { name: "James", age: 36 }
    ],
    title: "Users List"
  }

  /* State DOES NOT update in console, because setState is run asyncronous
  makeMeYounger = () => {
    // console.log('clicked') // test
    this.setState({
      users: [
        { name: "John", age: 10 },
        { name: "Jill", age: 20 },
        { name: "Peter", age: 30 },
        { name: "James", age: 26 }
      ]
    });
    console.log(this.state.users);
  }
  */

  /* State updates in console
  makeMeYounger = () => {
    // console.log('clicked') // test
    Promise.resolve(this.setState({
      users: [
        { name: "John", age: 10 },
        { name: "Jill", age: 20 },
        { name: "Peter", age: 30 },
        { name: "James", age: 26 }
      ]
    })).then(() => console.log(this.state.users));
  }
  */

  makeMeYounger = () => {
    const newState = this.state.users.map((user) => {
      const tempUser = user;
      tempUser.age -= 10;
      return tempUser;
    })

    Promise.resolve(this.setState({
      newState
    })).then(() => console.log("everyone is 10 years younger!!!"));
  }

  render() {
    return (
      <div>
        <button onClick={this.makeMeYounger}>Make Us 10 Years Younger</button>
        <br />
        <h1>{this.state.title}</h1>
        {
          this.state.users.map((user, i) => {
            return <User key={i} age={user.age}>{user.name}</User>
          })
        }
      </div>
    );
  }
}

export default Users;