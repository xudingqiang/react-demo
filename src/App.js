import './App.css';

import React, { Component } from 'react'
import About from './components/About'
import Home from './components/Home'
import { Link, Route } from 'react-router-dom';

export default class App extends Component {

  state = {
    searchContent: "",

  }

  render() {
    return (
      <div>
        <Link to="/about">点击about页面</Link>     &nbsp;  &nbsp;
        <Link to="/home">点击home页面</Link>

        <div>---------------------------------------</div>

        <Route path="/about" component={About}></Route>
        <Route path='/home' component={Home}></Route>
      </div>
    )
  }
}