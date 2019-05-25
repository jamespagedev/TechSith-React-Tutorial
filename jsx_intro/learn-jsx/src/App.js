import React from 'react';


function SayHello() {
  return <h1>hello</h1>
}

// this way is much cleaner
function App() {
  return (
    <div>
      <div name={1 + 1}>Hello</div>
      <div className="name">Use "className" instead of "class"</div>
      <div htmlFor="name">Use "htmlFor" instead of "for" (not recommended)</div>
      <div><SayHello /></div>
    </div>
  );
}

/* ugly jsx code
function App() {
  return (
    React.createElement(
      "div",
      null,
      React.createElement(
        "div",
        { name: 1 + 1 },
        "Hello"
      ),
      React.createElement(
        "div",
        { className: "name" },
        "Use \"className\" instead of \"class\""
      ),
      React.createElement(
        "div",
        { htmlFor: "name" },
        "Use \"htmlFor\" instead of \"for\" (not recommended)"
      ),
      React.createElement(
        "div",
        null,
        React.createElement(
          "h1",
          null,
          "hello"))
    )
  );
}
*/

export default App;
