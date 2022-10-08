import React, { Component } from 'react'

export default class index extends Component {
  componentDidMount(){
    console.log('home',this.props.match.params);
  }

  goPage=()=>{
    this.props.history.push('/about?id=1&name=bella');
  }

  goPageUser=()=>{
    this.props.history.push('/user',{id:1,name:'bella'});
  }

  render() {
    return (
      <div>
        我是HOME 页面

        <button onClick={this.goPage}>跳转</button>&nbsp;  &nbsp;

        <button onClick={this.goPageUser}>跳转User</button>
      </div>
    )
  }
}
