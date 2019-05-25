import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    staticName: 'jamespagedev',
    dynamicName: 'jamespagedev'
  }

  dynamicChangeName = (bool) => {
    console.log('test');
    if (bool) {
      this.setState({
        dynamicName: this.state.staticName += " :)"
      });
    } else {
      this.setState({
        dynamicName: this.state.staticName += " :("
      });
    }
  }

  staticChangeName = (newName) => {
    this.setState({
      staticName: newName
    });
  }

  changeNameFromInput = (ev) => {
    ev.preventDefault();
    this.setState({
      staticName: ev.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <br />
        <button onClick={() => this.staticChangeName("Awesome jamespagedev :(")}>Static Change state using Anon Function</button>
        <button onClick={this.staticChangeName.bind(this, "Awesome jamespagedev :)")}>Static Change state using bind Function</button>
        <br />
        <button onClick={() => this.dynamicChangeName(false)}>Dynamic Change state using Anon Function</button>
        <button onClick={this.dynamicChangeName.bind(this, true)}>Dynamic Change state using bind Function</button>
        <br />
        <input type="text" onChange={this.changeNameFromInput} value={this.state.staticName} />
        <br />
        <div>Static&nbsp;Name:&nbsp;{this.state.staticName}</div>
        <br />
        <div>Dynamic&nbsp;Name:&nbsp;{this.state.dynamicName}</div>
      </div>
    );
  }
}

export default App;
