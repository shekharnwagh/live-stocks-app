import { combineReducers } from 'redux';
import simpleReducer from './simpleReducer';
import webSocketReducer from './webSocketReducer';
import stocksReducer from './stocksReducer';

export default combineReducers({
    simpleReducer,
    webSocketReducer,
    stocks: stocksReducer
});