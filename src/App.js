/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './SearchBar/SearchBar';
import Pokedex from './PokedexContainer/Pokedex';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Pokedex />
      </header>
    </div>
  );
}

export default App;
