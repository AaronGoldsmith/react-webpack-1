import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root';
import Sidebar from './components/sidebar';
import './app.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <Sidebar />;
  }
}

export default hot(App);
