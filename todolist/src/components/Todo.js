import React from 'react';

function Todo({text,todo,todos,setTodos}) {
    //Control the function of the delete button
    const deleteHandler = () => {
        setTodos(todos.filter(el => el.id !== todo.id))
    };

    //Control the function of the items added
    const completeHandler = () => {
        setTodos(todos.map((item) => {
            if(item.id === todo.id){
                return {
                    ...item, completed: !item.completed
                }
            }
            return item;
        }))
    }

    //HTML elements
    return (
        <div className='todo'>
            
            <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>{text}</li>

            <button onClick={completeHandler} className='complete-btn'>
            <i className='fas fa-check'></i>
            </button>

            <button onClick={deleteHandler} className='trash-btn'>
            <i className='fas fa-trash'></i>
            </button>
            
        </div>
    );
}

export default Todo;