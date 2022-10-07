import React, { Component } from 'react'

import PubSub  from 'pubsub-js';

export default class index extends Component {


    /**
     * 搜索按钮
     */
    handleSearch = () => {
        console.log('发送消息',this.input1.value);
        if(this.input1.value){
            PubSub.publish('githup',this.input1.value);
        }
    }

    render() {
        return (
            <div className='item-row'>
                <input type='text' placeholder='请输入用户名' ref={(c)=>{this.input1 = c}}></input>  &nbsp;
                <button onClick={this.handleSearch}>搜索</button>
            </div>
        )
    }
}
