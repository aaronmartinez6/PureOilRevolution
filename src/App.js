import React, { Component } from 'react';
import leafDrop from './leaf-drop.jpg';
import './App.css';
import SectionHeader from './components/SectionHeader'

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <img src={leafDrop} className="App-logo" alt="logo" /> */}
        <h1 className="App-title">PURE OIL REVOLUTION</h1>
        <h5 className="App-subtitle">Changing the world one DROP at a time.</h5>
        <p className="App-intro">
          Say hello.
        </p>
        <SectionHeader title= "About Us"/>
        <SectionHeader title= "Let's get you a sample"/>
        <SectionHeader title= "Blog"/>
      </div>
    );
  }
}

export default App;
