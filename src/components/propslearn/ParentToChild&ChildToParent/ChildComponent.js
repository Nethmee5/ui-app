import React from 'react';

const ChildComponent = (props) => {
  const data = "Hello baby!"

  const handleMessage = () =>{
    props.dataSendToParent(data);
  }

  return (
    <div>
      <p> Child component {props.name}</p>
      <button onClick={() => props.handleClick(true)}>click Me</button>
      <button onClick={handleMessage}>Submit Message</button>
    </div>
  );
};
export default ChildComponent;
