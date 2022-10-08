import React, { Component } from 'react'

export default class index extends Component {

    componentDidMount() {
        console.log('User', this.props.location.state);
    }

    render() {
        return (
            <div>
                User  页面

            </div>
        )
    }
}
