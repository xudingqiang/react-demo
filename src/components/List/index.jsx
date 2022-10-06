import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import axios from 'axios';
import './index.css'

export default class index extends Component {
    state = {
        users: [
            { id: 1, avatar_url: "https://avatars.githubusercontent.com/u/383316?v=4", login: 'bella' },
            { id: 2, avatar_url: "https://avatars.githubusercontent.com/u/21636478?v=4", login: 'miao' }
        ],

    }

    /**
     * 请求网络
     * @param {*} data 
     */
    getData(data) {
        const api = 'https://api.github.com/search/users?q=';
        axios.get(api + data).then(res => {
            console.log('res', res);
            this.setState({
                users: res.data.items
            })
        })
    }

    componentDidMount() {
        PubSub.subscribe('githup', (_, data) => {
            console.log('List 收到消息', data);
            this.getData(data);

        })
    }

    render() {
        return (
            <div className='item-list'>
                {
                    this.state.users.map(user => {
                        return <div key={user.id} className='item-box'>
                            <img src={user.avatar_url} className='img-box'></img>
                            <div>{user.login}</div>
                        </div>
                    })
                }

            </div>
        )
    }
}
