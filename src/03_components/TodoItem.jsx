import React, { useState } from 'react';

const TodoItem = ({item, index, setTodo}) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [itemToEdit, setItemToEdit] = useState(item);

  const editTodoItemHandler = () => {
    setIsEditMode(true)
  };

  const deleteTodoItemHandler = () => {
    setTodo((prevTodo) => {
        const todoCopy = [...prevTodo];
        todoCopy.splice(index, 1);
        console.log(todoCopy);
        return todoCopy;
    });
  }; 

  const updateTodoItemHandler = () => {
    setTodo((prevTodo) => {
        const todoCopy = [...prevTodo];
        todoCopy[index] = itemToEdit;
        console.log(todoCopy);
        return todoCopy;
    });
    setIsEditMode(false);
  };

  const cancelTodoItemHandler = () => {
    setIsEditMode(false);
  };


  return (
    <div className='todo-item'>
        {isEditMode ? 
            <input value={itemToEdit} onChange={(e) => setItemToEdit(e.target.value)}/> :
            <div className='todo-item__content'>{item}</div>
        }
        <div className='todo-item__actions'>
            {isEditMode ? 
                <>
                    <button className='todo-item__button edit-btn' 
                            onClick={updateTodoItemHandler}>Update</button>
                    <button className='todo-item__button delete-btn' 
                            onClick={cancelTodoItemHandler}>Cancel</button>
                </> :
                <>
                    <button className='todo-item__button edit-btn' 
                            onClick={editTodoItemHandler}>Edit</button>
                    <button className='todo-item__button delete-btn' 
                            onClick={deleteTodoItemHandler}>Delete</button>
                </>
            }
        </div>
    </div>
  );
};

export default TodoItem;
