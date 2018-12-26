import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Photos from './pages/photos/photos';
import Videos from './pages/videos/videos';
import Home from './pages/home/home';
import About from './pages/about/about';

import Footer375 from './Components/Footer/Footer';
import Navbar375 from './Components/Navbar/Navbar';

class App extends React.Component {
  public render() {
    return (
      <Router>
        <div className="App">
          <Navbar375 />
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/videos" component={Videos} />
            <Route path="/photos" component={Photos} />
            <Route path="/" component={Home} />
            <Route component={Home} />
          </Switch>
          <Footer375 />
        </div>
      </Router>

    );
  }
}

export default App;