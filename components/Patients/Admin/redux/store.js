import {combineReducers,createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {appointmentReducer,doctorsReducer,filterReducer,DoctorsAppointment} from './reducers';


var store=createStore(
    combineReducers({
        appointments:appointmentReducer,
        doctors:doctorsReducer,
        filters:filterReducer,
        doctorsAppointments:DoctorsAppointment
    }),applyMiddleware(thunk));

export default store;