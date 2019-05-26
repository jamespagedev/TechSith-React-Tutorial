import React, { Component } from 'react';
import './App.css';
import Child from './Child.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "John"
    }
    console.log('constructor');
  }

  componentWillMount() {
    if (window.innerWidth < 500) {
      this.setState({ innerWidth: window.innerWidth })
    }
    console.log('componentWillMount');
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  componentWillReceiveProps() {
    console.log('componentWillReceiveProps');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate');
    return true;
  }

  componentWillUpdate() {
    console.log('componentWillUpdate');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('prevProps', prevProps);
    console.log('prevState', prevState);
    console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  changeState() {
    this.setState({ name: "Jill" })
  }

  unmountChild() {
    this.setState({ name: "Robert" })
  }

  render() {
    console.log('render');
    if (this.state.name === "Robert") {
      return <div />
    }
    return (
      <div className="App">
        name:&nbsp;{this.state.name}
        &nbsp;|&nbsp;innerWidth:&nbsp;{this.state.innerWidth}
        <Child name={this.state.name}></Child>
        <button onClick={this.changeState.bind(this)}>Change State</button>
        <button onClick={this.unmountChild.bind(this)}>Unmount Child</button>
      </div>
    );
  }
}

export default App;
