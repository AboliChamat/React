import React, {useState} from 'react';

function Input() {
    const[name,setName]=useState('');
    const[number,setNumber]=useState('');
    function handleName(e){
        if(name.length>5){
            alert('Length of name should be less than 5')
        }
        else{
            setName(e.target.value);
        }
    }
    function handleChange(e){
        if(number>100){                    
            alert('number should be less than 100');
        }
        else{
            setNumber(e.target.value);
        }
    }
  return (
    <div>
      <h1>Input</h1>
      <input type='text' placeholder='Enter a text' onChange={(e)=>handleName(e)}/>
      <p>{name}</p>
      <input type='text' placeholder='Enter a number' onChange={(e)=>handleChange(e)}/>
      <p>{number}</p>
    </div>
  );
}

export default Input;
