import React from 'react';
import './App.css';
//Importing Signup from component
import Signup from './component/registration';
//Importing Login from component
import Login from './component/login';

function App() {
  return (
    <div className="App">
      <Signup/>
      <Login/>
    </div>
  );
}

export default App;
