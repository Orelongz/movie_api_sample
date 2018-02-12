import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  Switch,
  Route
} from 'react-router-dom';
import NavigationBar from './NavigationBar.jsx';
import Home from './Home.jsx';
import Search from './Search.jsx';
import About from './About.jsx';

const TheRoutes = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/search' component={Search}/>
      <Route path='/about' component={About}/>
    </Switch>
  </main>
);

class Main extends Component {

  render() {
    return (
      <div>
        <NavigationBar />
        <TheRoutes />
      </div>
    );
  }
}

export default Main;
