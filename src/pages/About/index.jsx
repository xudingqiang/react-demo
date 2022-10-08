import React, { Component } from 'react'
import qs from 'qs';

export default class index extends Component {

  componentDidMount(){
    const data = this.props ;
    const d = qs.parse(this.props.location.search);
    console.log('about',d);
  }

  goPage=()=>{
    this.props.history.push('/home/18/bella');
  }

  render() {
    return (
      <div>
         我是about 页面
         <button onClick={this.goPage}>跳转</button>
      </div>
    )
  }
}
