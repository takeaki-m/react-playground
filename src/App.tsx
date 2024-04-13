import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Profile} from "./Profile";
import ShoppingList from "./Products";
import {useState} from "react";
import MyButton from "./MyButton";
import Board from "./Board";

function App() {
  const [count, setCount] = useState(0)
  function handleClick() {
    setCount(count + 1);
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <h1>Welcome to my app </h1>
      <h2>Counters that updates together</h2>
      <MyButton count={count} onClick={handleClick}/> <br/>
      <MyButton count={count} onClick={handleClick}/> <br/>
      <Profile/><br/>
      <ShoppingList/><br/>
      <Board/>
    </div>
  );
}

export default App;
