import React, { Component } from 'react';
import './App.css';
import  Header  from './components/Header';
import FilmContainer from './components/FilmContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
          <div id="main-cont">
              <FilmContainer />
          </div>

      </div>
    );
  }
}

export default App;
