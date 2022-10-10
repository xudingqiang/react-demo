import {createStore} from 'redux';
import counter from './countReducer'

export default createStore(counter);