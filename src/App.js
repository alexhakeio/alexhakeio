import React, { Component } from 'react';
import './App.css';
import NavComponent from './NavComponent.js';
import MainComponent from './MainComponent.js';
import FooterComponent from './FooterComponent.js';
import NewsComponent from './NewsComponent';
import CodeComponent from './CodeComponent';
import AboutComponent from './AboutComponent';
import ContactComponent from './ContactComponent';
import { Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavComponent />
        <Route exact path='/' render={() => (
          <MainComponent />
        )} />
        <Route exact path='/news' render={() => (
          <NewsComponent />
        )} />
        <Route exact path='/code' render={() => (
          <CodeComponent />
        )} />
        <Route exact path='/about' render={() => (
          <AboutComponent />
        )} />
        <Route exact path='/contact' render={() => (
          <ContactComponent />
        )} />
        <FooterComponent />
      </div>
    );
  }
}

export default App;
