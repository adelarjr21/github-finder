import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    const name = 'John Doe';
    const showName = true;
    // Estrutura condicional: {showName && name} SE showName TRUE então NAME | Também possível: {showName ?(then) name :(else) full}
    return (
      <div className="App">
        <h1>Hello {showName && name}</h1>
      </div>
    );
  }
}

export default App;