import {createStore,combineReducers} from 'redux';
import {doctorsReducer} from '../reducers/doctor';
import filterDoctors from '../reducers/filterDoctor';

export const store=createStore(
    combineReducers({
        doctors:doctorsReducer,
        filters:filterDoctors
    })
);