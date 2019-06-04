import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import DataReducer from './reducer';



const DataStore=createStore(
    combineReducers({
        dataReducer:DataReducer
    }),applyMiddleware(thunk)
);

export default DataStore;