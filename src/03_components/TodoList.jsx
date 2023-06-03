import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({todo, setTodo}) => {
  return (
    <div className='todo-list'>
        {todo.map((value, index) => (
            <TodoItem 
                item={value} 
                key={index}
                index={index}
                setTodo={setTodo}
            />
        ))}
    </div>
  );
};

export default TodoList;

