import './App.css';

import React, { Component } from 'react'
import About from './pages/About'
import Home from './pages/Home'
import User from './pages/User'
import { Link, Redirect, Route } from 'react-router-dom';
import {addAction,reduceAction} from './redux/countAction';
import store from './redux/store';

export default class App extends Component {

  componentDidMount() {
    store.subscribe(() => {
      this.setState({});
    })
  }

  state = {
    searchContent: "",

  }

  add = () => {
    const value = parseInt(this.select1.value);
    console.log('value',value);
    // store.dispatch({ type: 'add', data: value });
    store.dispatch(addAction(value))
  }

  reduce = () => {
    const value = parseInt(this.select1.value);
    // store.dispatch({ type: 'reduce', data: value });
    store.dispatch(reduceAction(value))
  }

  asyncAdd = () => {
    setTimeout(() => {
      const value = parseInt(this.select1.value);
      // store.dispatch({ type: 'add', data: value });
      store.dispatch(addAction(value))
    }, 500);
  }

  render() {
    return (
      <div>
        <Link to={`/about?id=1&name=bella`}>点击about页面</Link>     &nbsp;  &nbsp;
        <Link to="/home/18/bella">点击home页面</Link> &nbsp;  &nbsp;
        <Link to={{ pathname: "/user", state: { id: 1, name: 'bella' } }}>点击User页面</Link> &nbsp;  &nbsp;

        <div>---------------------------------------</div>

        <Route path="/about" component={About} ></Route>
        <Route path='/home/:id/:bella' component={Home}  ></Route>
        <Route path='/user' component={User}  ></Route>
        <Redirect to={"/home"}></Redirect>


        <div>结果： {store.getState()}  </div>
        <div>
          <select ref={(c) => this.select1 = c} >
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
          &nbsp;

          <button onClick={this.add}>加</button>        &nbsp;
          <button onClick={this.reduce}>减</button>         &nbsp;
          <button onClick={this.asyncAdd}>异步加</button>       &nbsp;
        </div>
      </div>
    )
  }
}