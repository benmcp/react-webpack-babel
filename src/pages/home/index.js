import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';
import styles from '../../css/main.scss';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>It Works!</h1>
        <p>index page</p>
        <Link to="/about">About</Link>
      </div>
    )
  }
}
