import React, { Component } from 'react';
import './App.css';
import  Header  from './components/Header';
import FilmContainer from './components/FilmContainer'
import Modal from './components/Modal';

class App extends Component {
  render() {
    return (

      <div className="App">
          <Modal/>
        <Header/>
          <div id="main-cont">
              <FilmContainer />
          </div>

      </div>

    );
  }
}

export default App;
