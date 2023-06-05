import React, { useState, useEffect } from 'react';
import './App3.css';
import TodoList from './TodoList';

const App3 = () => {

  const [task, setTask] = useState("");
  const [todo, setTodo] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

  const inputTaskHandler = (e) => {
    setTask(e.target.value);
    console.log(e.target.value);
  };

  const addButtonHandler = (e) => {
    e.preventDefault();

    if(!task.length) {
      return;
    };
    console.log(e);
    // Option A
    // const todoCopy = [...todo];
    // todoCopy.push(task);
    // setTodo(todoCopy);

    // Option B
    setTodo((prevState) => [...prevState, task]);
    setTask('');
  };

  useEffect(() => {
    if(!isFetching) {
      localStorage.setItem("todo", JSON.stringify(todo));
    };
  }, [todo]);

  useEffect(() => {
    const storageTodo = localStorage.getItem("todo");
    console.log(storageTodo);
    if(storageTodo) {
      setTodo(JSON.parse(storageTodo));
    };
    setIsFetching(false);
  }, []);

  return (
    <div className='App'>
      <h2>To Do App</h2>
      <form onSubmit={addButtonHandler}>
        <input 
            className='todo-input'
            id='text'
            type='text' 
            placeholder='Add To Do Task...'
            value={task}
            onChange={inputTaskHandler}
        />
        <button type='submit' className='add-button'>
          Add 
        </button>
      </form>

      <TodoList todo={todo} setTodo={setTodo} />
    </div>
  );
};

export default App3;
