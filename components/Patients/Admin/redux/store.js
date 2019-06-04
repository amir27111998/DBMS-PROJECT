import {combineReducers,createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {appointmentReducer} from './reducers';


var store=createStore(
    combineReducers({
        appointments:appointmentReducer
    }),applyMiddleware(thunk));

export default store;