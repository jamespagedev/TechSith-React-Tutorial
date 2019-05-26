import React, { Component, Fragment } from 'react';
import './App.css';

const Temp = props => {
  return (
    <Fragment>
      {
        props.greetings === "Hi"
          ? <Fragment>&lt;div&gt;{props.greetings}&lt;/div&gt;</Fragment>
          : props.greetings
      }
    </Fragment>
  )
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Temp greetings="Hi" />
      </div>
    );
  }
}

export default App;
