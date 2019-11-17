import { combineReducers } from 'redux';
import simpleReducer from './simpleReducer';
import webSocketReducer from './webSocketReducer';
import stocksReducer from './stocksReducer';

export default combineReducers({
    simpleReducer,
    webSocket: webSocketReducer,
    stocks: stocksReducer
});