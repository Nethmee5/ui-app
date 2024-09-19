import React, { useState } from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent = (props) =>{
 const [name,setName] = useState('Nethmee');
 const [text,setText] = useState('');
 const [clicked,setClicked] = useState(false);

 const changeText =(e)=>{
    setText(e.target.value);
 }
const showName = () =>{
  setName(text);
 }

const handleChildClick = (isClicked) =>{
    setClicked(isClicked);
  console.log('Child button clicked:', isClicked);
}     
return (
<div>
<p>The parent has the name: {name}</p>
<p>Enter your name:</p>
    <input type='text' placeholder='enter your name' onChange={changeText}></input>
    <button onClick={showName}>show name</button>
    <ChildComponent name={name} handleClick = {handleChildClick}  />
</div>
     
    );
}

export default ParentComponent;