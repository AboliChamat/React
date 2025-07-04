import React, {useState} from 'react';

function Input2() {
    const[name, setName]=useState();
    const[number, setNumber]=useState();
    const handleName=(e)=>{
        setName(e.target.value);
    }
    const handleChange=(e)=>{
        setNumber(e.target.value);
    }
  return (
    <div>
      <p>Input</p>
      <input type='text' placeholder='Enter your name' onChange={(e)=>handleName(e)}/>
      <p>{name}</p>
      <input type='text' placeholder='Enter your name' onChange={(e)=>handleChange(e)}/>
      <p>{number}</p>
    </div>
  );
}

export default Input2;
