import React from 'react';

/***************************************************************************************************
 ********************************************* Component *******************************************
 **************************************************************************************************/
const User = props => {
  return (
    <li>
      <span>name:&nbsp;{props.children},&nbsp;age:&nbsp;{props.age}</span>
      <input onChange={props.changeEvent} value={props.children} />
      <button onClick={props.delEvent}>Delete</button>
    </li>
  );
}

export default User;