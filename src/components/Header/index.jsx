import React, { Component } from 'react'

export default class index extends Component {

    //回车键处理事件
    handleKey = (event) => {
        if (event.keyCode === 13) {
            this.props.handleKey(event.target.value);
        }
    }

    render() {
        return (
            <div className='item-row'>
                <input style={{ width: '250px' }} type="text" placeholder='请输入您的任务名称,按回车键确认' onKeyDown={this.handleKey}></input>
            </div>
        )
    }
}
