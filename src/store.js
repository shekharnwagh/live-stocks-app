import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
import wsMiddleware from './middleware/middleware';
import { composeWithDevTools } from 'redux-devtools-extension';

export default function configureStore(initialState = {}) {
    return createStore(
        rootReducer,
        initialState,
        composeWithDevTools(
            applyMiddleware(thunk, wsMiddleware)
        )
    );
}