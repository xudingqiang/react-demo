import './App.css';

import React, { Component } from 'react'
import About from './pages/About'
import Home from './pages/Home'
import User from './pages/User'
import { Link, Redirect, Route } from 'react-router-dom';

export default class App extends Component {

  state = {
    searchContent: "",

  }

  render() {
    return (
      <div>
        <Link to={`/about?id=1&name=bella`}>点击about页面</Link>     &nbsp;  &nbsp;
        <Link to="/home/18/bella">点击home页面</Link> &nbsp;  &nbsp;
        <Link to={{pathname:"/user",state:{id:1,name:'bella'}}}>点击User页面</Link> &nbsp;  &nbsp;

        <div>---------------------------------------</div>

        <Route path="/about" component={About} ></Route>
        <Route path='/home/:id/:bella' component={Home}  ></Route>
        <Route path='/user' component={User}  ></Route>
        <Redirect to={"/home"}></Redirect>
      </div>
    )
  }
}