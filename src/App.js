//parent import
import React, { Component } from 'react';
//child imports
import './index.css';
import TopicBrowser from './components/TopicBrowser/TopicBrowser';

class App extends Component {
  render() {
    return (
      <TopicBrowser />
    )
  }
}

//export
export default App;
