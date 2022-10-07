import './App.css';

import React, { Component } from 'react'

// import { nanoid } from 'nanoid';
import Search from './components/Search';
import List from './components/List';
export default class App extends Component {

  state = {
      searchContent :"",
    
  }

  render() {
    return (
      <div>
        <Search></Search>
        <List></List>
        
      </div>
    )
  }
}