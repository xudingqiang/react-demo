import React, { Component } from 'react'

import Item from '../Item'

export default class index extends Component {

    handleCheck = (id,checked) => {
       this.props.handleCheck(id,checked);
    }

    render() {
        const { todos } = this.props;
        return (
            <div>
                {
                    todos.map(todo => {
                        return <Item key={todo.id} todo={todo} handleCheck={this.handleCheck}></Item>
                    })
                }
            </div>
        )
    }
}
