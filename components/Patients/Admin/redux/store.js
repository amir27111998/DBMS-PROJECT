import {combineReducers,createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {appointmentReducer,doctorsReducer,filterReducer} from './reducers';


var store=createStore(
    combineReducers({
        appointments:appointmentReducer,
        doctors:doctorsReducer,
        filters:filterReducer
    }),applyMiddleware(thunk));

export default store;