import React, { Component } from 'react';
import './App.css';
import Header from './Header'
import Meme from './Meme'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Meme />
        <p> Made with  using Scrimba Teaching Resourses.</p>
      </div>
    );
  }
}

export default App;
