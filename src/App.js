import React, { Component } from 'react';
import Api from './components/Api';
import './App.css'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <header>
          <h2 style={{textAlign:"center"}}>List of persons data</h2>
        </header>
        <Api/>        
      </div>
    );
  }
}

export default App;