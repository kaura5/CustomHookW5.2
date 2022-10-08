import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import useLocalStorage from './hooks/useLocalStorage';
import JokeCard from './components/JokeCard';

function App() {

  const names = ["Will", "Alex", "Jasreet"];

  const [list, setList] = useLocalStorage("MAD9135Class", names);

  function handleSubmit(ev) {
    ev.preventDefault();
    console.log(ev.target[0].value);
    setList(list.concat(ev.target[0].value));
  }

  return (
    <div className="App">
      <Header />
      {list.map((item) => (
        <p key={item}>{item}</p>
      ))}

      <form onSubmit={handleSubmit}>
        <input type="text" />
        <button type="submit">Save</button>
      </form>
      <JokeCard />
    </div>
  );
}

export default App;
