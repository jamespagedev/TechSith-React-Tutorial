import React, { Component } from 'react';

class Child extends Component {
  constructor() {
    super();
    console.log('Child constructor');
  }

  componentWillMount() {
    if (window.innerWidth < 500) {
      this.setState({ innerWidth: window.innerWidth })
    }
    console.log('Child componentWillMount');
  }

  componentDidMount() {
    console.log('Child componentDidMount');
  }

  componentWillReceiveProps() {
    console.log('Child componentWillReceiveProps');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('Child shouldComponentUpdate');
    return true;
  }

  componentWillUpdate() {
    console.log('Child componentWillUpdate');
  }

  componentWillUnmount() {
    console.log('Child componentWillUnmount');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Child prevProps', prevProps);
    console.log('Child prevState', prevState);
    console.log('Child componentDidUpdate');
  }

  render() {
    console.log('Child render');
    return (
      <div className="App">
        Child&nbsp;name:&nbsp;{this.props.name}
      </div>
    );
  }
}

export default Child;
