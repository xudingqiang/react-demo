import React, { Component } from 'react'

export default class index extends Component {

    handleCheck = (id) => {
        // 
        return (event) => {
            this.props.handleCheck(id,event.target.checked);
        }
    }

    render() {
        const { todo } = this.props;
        return (
            <div className='item-row'>
                <input type="checkbox" checked={this.props.todo.check} onChange={this.handleCheck(todo.id)}></input>
                <div>{todo.name}</div>
            </div>
        )
    }
}
