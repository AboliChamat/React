import React, { useState } from "react";

function TodoList() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  const handlechange = (e) =>{
    setTodo(e.target.value);
  }
  const handleclick = () =>{
    setTodo(todo);
    setTodoList([...todoList, todo]);
    setTodo('');
  }
  const handleRemove = () =>{
    setTodoList([]);
  }
  const handleDelete = (id) =>{
    setTodoList(todoList.filter((elem, i)=> id !== i));
  }
  return (
    <div>
    <h1>TODO LIST</h1>
      <div style={{ display: "flex" }}>
        <input
          type="text"
          placeholder="item"
          value={todo}
          onChange={(e) => handlechange(e)}
        />
        <button onClick={handleclick}>Add item</button>
        <button onClick={handleRemove}>Remove All</button>
      </div>
      <br />
        {todoList.map((item, id)=>{
            return (<div key={id} style={{display:"flex"}}><li>{item}</li><button onClick={()=>handleDelete(id)}>Delete</button></div>)
        })}
    </div>
  );
}

export default TodoList;

