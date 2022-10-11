import React, { Component } from 'react'
import store from '../redux/store';
import { addAction, reduceAction } from '../redux/countAction';

export default class CountUI extends Component {

    componentDidMount() {
        console.log('componentDidMount', this.props);
    }

    add = () => {
        const value = parseInt(this.select1.value);
        console.log('value', value);
        // store.dispatch({ type: 'add', data: value });
        //store.dispatch(addAction(value));
        this.props.jia(value);
    }

    reduce = () => {
        const value = parseInt(this.select1.value);
        // store.dispatch({ type: 'reduce', data: value });
      //  store.dispatch(reduceAction(value))
      this.props.jian(value);
    }

    asyncAdd = () => {
        setTimeout(() => {
            const value = parseInt(this.select1.value);
            // store.dispatch({ type: 'add', data: value });
            store.dispatch(addAction(value))
        }, 500);
    }

    render() {
        return (
            <div>
                <div>结果： {store.getState()}  </div>
                <div>
                    <select ref={(c) => this.select1 = c} >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                    </select>
                    &nbsp;

                    <button onClick={this.add}>加</button>        &nbsp;
                    <button onClick={this.reduce}>减</button>         &nbsp;
                    <button onClick={this.asyncAdd}>异步加</button>       &nbsp;
                </div>

            </div>
        )
    }
}
