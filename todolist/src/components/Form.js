import React from 'react';

function Form({setInputText, todos, setTodos, inputText, setStatus}) {
    //Controls the input function
  const inputTextHandler = (e) => {
      console.log(e.target.value);
      setInputText(e.target.value);
    };

    //Controls the submit function 
    const submitTodoHandler = (e) => {
      e.preventDefault();
      setTodos([
        ...todos, {text: inputText, completed: false, id: Math.random() * 1000, },
      ]);
      setInputText('');
    };

    //Controls the status of the input
    const statusHandler = (e) => {
      setStatus(e.target.value);
    }

    //HTML Elements
    return (

    <form>

      <input value={inputText} onChange={inputTextHandler} className="todo-input" type="text"/>
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>

      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Marked</option>
          <option value="uncompleted">Unmarked</option>
        </select>
      </div>

    </form>
    );
}

export default Form;