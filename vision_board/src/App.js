import React, {useState} from 'react';
import './App.css';
//Importing Login from components
import Login from './components/login';
//Importing Signup from components
import Signup from './components/signup';

function App() {


  return (
    <div>
      <Login/>
      <Signup/>
    </div>
  );
}

export default App;
