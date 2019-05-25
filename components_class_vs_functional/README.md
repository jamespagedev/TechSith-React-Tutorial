# Class Components vs ES6 functional Components

> video: https://www.youtube.com/watch?v=uGgPINlKqBs

* Class Component vs ES6 Functional Component
  * Class Component, see file: react-class-vs-es6-components/src/users/Users.js
  * ES6 Functional Component, see file: react-class-vs-es6-components/src/users/User.js

> Notes:
* React uses pascal case to differentiate "native html components" vs "custom components"
  * Example: `<div />` vs `<Div />`
* If you want to use multiple lines within the `return` in `render() {return...}`... wrap the lines with `return(lines)`
  * Example:
  ```
  render() {
    return <div>test</div>
  }
  ```
  * vs
  ```
  render() {
    return (
      <div>
        test
      </div>
    );
  }
  ```
* Make sure you wrap all your components in one single `<div>components...</div>`, or you will get an error.
* `{props.children}` is a way to display info from the parent on where the component is called
  * example parent calling component: `<User>jamespagedev</User>`
  * example component using info passed by parent `return(<div>{props.children}</div>)`
* If given the choice, it's better to use "ES6 Functional Components" over "Class Components", however...
  * If you want to maintain the state within the component, it would be better to use a "Class Component"