import React from 'react';
import { render } from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import Index from './pages/home/index';
import About from './pages/about';
import styles from './css/main.scss';

class App extends React.Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Index}/>
        <Route path="/about" component={About}/>
      </Router>
    )
  }
}

export default App;
