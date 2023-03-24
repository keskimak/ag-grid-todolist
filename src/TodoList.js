import React, { useState, useRef } from 'react';
import TableComponent from './Components/TableComponent';

function TodoList() {

  const [todo, setTodo] = useState({ desc: '', date: '', priority:'low'});
  const [todos, setTodos] = useState([]);
  const gridRef = useRef();

  const inputChanged = (event) => {
    setTodo({ ...todo, [event.target.name]: event.target.value });
  }

  const addTodo = (event) => {
    event.preventDefault();
    if (todo.desc && todo.date) {
      setTodos([...todos, todo])
    }
    else (
      alert('Fill both description and date!') //prevent adding without content
    )
  }
 
  const deleteTodo = () => {
    gridRef.current.getSelectedNodes();
    if (gridRef.current.getSelectedNodes().length > 0) {
        setTodos(todos.filter((todo, index) =>
            index != gridRef.current.getSelectedNodes()[0].id))
    }
    else {
        alert('Select row first');
    }
};

  return (
    <div>
      <label style={{ padding: 10 }}>Description </label>
      <input type="text" onChange={inputChanged} name="desc" value={todo.desc} />
      <label style={{ padding: 10 }}>Date </label>
      <input type="date" onChange={inputChanged} name="date" value={todo.date} />

      <label for="priority" style={{ padding: 10 }}>Priority</label>
      <select id="priority"  onChange={inputChanged} name="priority" value={todo.priority}>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>

      <button style={{ marginLeft: 5 }} onClick={addTodo}>Add</button>
      {todos.length > 0 ? <TableComponent deleteTodo={deleteTodo} todos={todos} gridRef={gridRef} todo={todo} /> : <><h3>Add task</h3></>}



    </div>
  );
};

export default TodoList;