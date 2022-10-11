import React, { Component } from 'react'

import CountUI from '../components/CountUI'
import { connect } from 'react-redux'
import store from '../redux/store'
import { addAction, reduceAction } from '../redux/countAction';


function mapStateToProps(state) {
    return { count: state }
}

function mapDispatchToProps(dispatch) {
    return{
        jia: number => dispatch(addAction(number)),
        jian: (data) => { console.log('33333333333333'); return dispatch(reduceAction(data)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CountUI);