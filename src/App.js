import React, { Component } from 'react';
import './App.css';
import StickyNoteContainer from './containers/StickyNoteContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <StickyNoteContainer />
      </div>
    );
  }
}

export default App;
