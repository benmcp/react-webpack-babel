// modules/Repos.js
import React from 'react'
import HeaderView from '../components/header';
import { Link } from 'react-router';

export default React.createClass({
  render() {
    return (
      <div>
        <HeaderView></HeaderView>
        <p>About Page</p>
        <Link to="/">Index</Link>
      </div>
    )
  }
});
