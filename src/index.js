import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import WebSocketConnection from './hocs/WebSocketConnection';
import configureStore from './store';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Provider store={configureStore()}>
        <WebSocketConnection
            host={'ws://stocks.mnet.website'}
        >
            <App />,
      </WebSocketConnection>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
