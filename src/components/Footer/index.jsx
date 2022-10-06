import React, { Component } from 'react'

export default class index extends Component {


    handleClean = ()=>{
       this.props.handleClean();
    }  

    handleAll = (event)=>{
        this.props.handleAll(event.target.checked);
    }

  render() {
    const {todos} = this.props;
    let finshTodo = todos.filter(todo=>{return todo.check === true});

    return (
      <div  className='item-row'>
           <input type="checkbox" checked ={finshTodo.length === todos.length ? true:false}  onChange={this.handleAll} ></input> &nbsp;
           <span>已完成:{finshTodo.length}</span>  &nbsp;
           <span>全部: {todos.length}</span>&nbsp;

           <button onClick={this.handleClean}>清空已完成任务</button>
      </div>
    )
  }
}
