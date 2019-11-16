import * as actions from '../actions/webSocketActions';
import {  stocksUpdateAction } from '../actions/stockUpdate';
import { parseStockData } from '../helpers/parseStocks'

const socketMiddleware = () => {
    let socket = null;

    const onOpen = store => (event) => {
        console.log('websocket open', event.target.url);
        store.dispatch(actions.wsConnected(event.target.url));
    };

    const onClose = store => () => {
        store.dispatch(actions.wsDisconnected());
    };

    const onMessage = store => (event) => {
        const payload = parseStockData(JSON.parse(event.data));
        console.log('receiving server message : ', payload);

        store.dispatch(stocksUpdateAction(payload))
    };

    // the middleware part of this function
    return store => next => action => {
        switch (action.type) {
            case 'WS_CONNECT':
                if (socket !== null) {
                    socket.close();
                }

                // connect to the remote host
                socket = new WebSocket(action.host);

                // websocket handlers
                socket.onmessage = onMessage(store);
                socket.onclose = onClose(store);
                socket.onopen = onOpen(store);

                break;
            case 'WS_DISCONNECT':
                if (socket !== null) {
                    socket.close();
                }
                socket = null;
                console.log('websocket closed');
                break;
            default:
                console.log('the next action:', action);
                return next(action);
        }
    };
};

export default socketMiddleware();
