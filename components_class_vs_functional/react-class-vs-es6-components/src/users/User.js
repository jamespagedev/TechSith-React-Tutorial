import React from 'react';

/***************************************************************************************************
 ********************************************* Component *******************************************
 **************************************************************************************************/
const User = props => {
  let age = props.age ? props.age : 'NA';
  if (props.children) {
    return (
      <div>name:&nbsp;{props.children}&nbsp;|&nbsp;age:&nbsp;{age}</div>
    );
  } else {
    return <div>Invalid&nbsp;Entry</div>
  }
}

export default User;