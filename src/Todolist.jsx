import React, { useState } from "react";

function TodoList() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const handlechange = (e) => {
    setTodo(e.target.value);
  };

  const handleclick = () => {
    if (editingIndex !== null) {
      const updatedList = [...todoList];
      updatedList[editingIndex] = todo;
      setTodoList(updatedList);
      setEditingIndex(null);
    } else {
      setTodoList([...todoList, todo]);
    }
    setTodo('');
  };

  const handleUpdate = (id, item) => {
    setTodo(item);
    setEditingIndex(id);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleclick(); 
    }
  };


  const handleDelete = (id) => {
    setTodoList(todoList.filter((_, i) => id !== i));
  };

  return (
    <div>
      <h1>TODO LIST</h1>
      <div style={{ display: "flex" }}>
        <input
          type="text"
          placeholder="item"
          value={todo}
          onChange={handlechange}
          onKeyDown={handleKeyDown}
        />
        <button onClick={handleclick}>
          {editingIndex !== null ? "Update item" : "Add item"}
        </button>
      </div>
      <br />
      {todoList.map((item, id) => {
        return (
          <div key={id} style={{ display: "flex" }}>
            <li>{item}</li>
            <button onClick={() => handleUpdate(id, item)}>Update</button>
            <button onClick={() => handleDelete(id)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
}

export default TodoList;
