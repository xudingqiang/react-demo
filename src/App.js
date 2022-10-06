import './App.css';

import React, { Component } from 'react'

import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import { nanoid } from 'nanoid';

export default class App extends Component {

  state = {
      searchContent :"",
      todos:[
        {id:1,name:'bella',check:false},
        {id:2,name:'miao',check:true},
        {id:3,name:'qing',check:false},
      ]
  }

  //从header传过来的事件
  handleKey = (data)=>{
    console.log('data', data);
    const {todos} = this.state;

    var todo = {
      id: nanoid(),
      name:data,
      check:false
    }

    let newTodos = [todo,...todos];
    this.setState({
      todos:newTodos
    })
  }

  handleCheck = (id,checked)=>{
    console.log('handleCheck',id,checked);
    const {todos} = this.state;
    const newTodos = todos.map(todo=>{
      if(id === todo.id){
        return {...todo,check:checked}
      }else{
        return todo ;
      }
     
    })
    this.setState({
      todos:newTodos
    })
  }

  handleClean = ()=>{
    const {todos} = this.state;

    const newTodos = todos.filter(todo=>{
      return todo.check === false ;
    });

    this.setState({
      todos:newTodos
    })
  }

  handleAll = (checked)=>{
    const {todos} = this.state;
    const newTodos = todos.map(todo=>{
        return {...todo,check:checked}
    })
    this.setState({
      todos:newTodos
    })
  }

  render() {
    const {todos} = this.state;
    return (
      <div>
         <Header handleKey = {this.handleKey}></Header>
         <List todos = {todos} handleCheck={this.handleCheck}></List>
         <Footer todos = {todos} handleClean = {this.handleClean} handleAll ={this.handleAll}></Footer>
        
      </div>
    )
  }
}