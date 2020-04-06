import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import HeaderBlog from './components/header'


function App() {
  return (
    <div className="App">
       {render()}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <HeaderBlog />
          Edit <code>src/App.js</code> and save to reload.
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
    </div>
  );

  function render (properties) {

    axios.get('/posts/')
        .then(resultado =>{console.log(resultado)})
  
    axios.get('/comments/test')
        .then(resultado =>{console.log(resultado)})
  }
}

export default App;
