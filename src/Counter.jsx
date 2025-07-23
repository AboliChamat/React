import React, {useState} from 'react';

function Counter() {
  const[count,setCount]=useState(0);
  const handleMinus=()=>{
    if(count>0){
      setCount(count-1);
    }
  }
  const handleReset=()=>{
    setCount(0);
  }
  return (
    <div>
      <h1>Counter</h1>
      <button onClick={()=>setCount(count+1)}>+</button>
      <p>{count}</p>
      <button onClick={handleMinus}>-</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default Counter;
