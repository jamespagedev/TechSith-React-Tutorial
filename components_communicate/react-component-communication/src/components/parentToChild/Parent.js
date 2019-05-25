import React from 'react';
import Child from './Child.js';

/***************************************************************************************************
 ********************************************* Component *******************************************
 **************************************************************************************************/
const Parent = props => {
  return (
    <div>
      <Child {...props} doWhatever={props.changeTheWorldEvent} xyz='xyz' />
      <Child {...props} doWhatever={props.keepTheWorldSameEvent} xyz='xyz' />
    </div>
  );
}

export default Parent;