import React, { Component } from 'react';
import './App.css';
import  Header  from './components/Header';
import FilmContainer from './components/FilmContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <FilmContainer/>
      </div>
    );
  }
}

export default App;
