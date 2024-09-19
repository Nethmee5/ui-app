import React from 'react';

const ChildComponent = (props) => {
  return (
    <div>
      <p> Child component {props.name}</p>
      <button onClick={() => props.handleClick(true)}>click Me</button>
    </div>
  );
};
export default ChildComponent;
