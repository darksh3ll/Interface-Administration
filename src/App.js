import React, { Component } from 'react';
import './App.css';
import Navbar from "./components/navbar/Navbar";
import Actualites from "./components/actualite/Actualites";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
          <Actualites/>
      </div>
    );
  }
}

export default App;
