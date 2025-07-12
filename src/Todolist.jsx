import React, {useState} from 'react';

function Todolist() {
  const [todo,setTodo]=useState("");
  const [todoList, setTodoList]=useState([]);
  const handlechange=(e)=>{
    setTodo(e.target.value);
  }
  const handleclick=()=>{
    setTodo(todo);
    setTodoList([...todoList,todo]);
    setTodo('');
  }
  const handleRemove=()=>{
    setTodo([]);
  }
  const handleDelete=(id)=>{
    setTodoList(todoList.filter((elem,id)=>id!==i));
  }
  return (
    <div>
      <h1>TO DO LIST</h1>
      <div style={{display:"flex"}}>
        <input type='text' placeholder='Enter a Task' value={todo} onChange={(e)=>handlechange(e)}/>
        <button onClick={handleclick}>All item</button>
        <button onClick={handleRemove}>Delete All</button>
      </div>
      <br/>
      {todoList.map((item,id)=>{
      return(
        <div style={{display:"flex"}} key={id}>
          <li>{item}</li>
          <button onClick={handleDelete(id)}>Delete</button>
        </div>)
      })}
    </div>
  );
}

export default Todolist;
