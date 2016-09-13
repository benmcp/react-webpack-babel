import React from 'react';
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'
import styles from '../../css/main.scss';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>It Works!</h1>
        <p>Global bootstrap css import works too as you can see on the following button.</p>
        <p><a className="btn btn-primary btn-lg">Enjoy!</a></p>
      </div>
    )
  }
}
