import React from 'react';
//Import Components
import Todo from './Todo';

function TodoList({todos, setTodos, filteredTodos}) {
  //Creates the list of items added from the To Do component
  console.log(todos);

  //HTML elements
  return(

    <div className="todo-container">

      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <Todo 
          setTodos={setTodos} 
          todos={todos} 
          key={todo.id}
          todo={todo}
          text={todo.text} />
        ))}
      </ul>

    </div>
  );
};

export default TodoList;