const websocketInitialState = {};

export default (state = { ...websocketInitialState }, action) => {
    switch (action.type) {
        case 'WS_CONNECT':
            return { ...state, host: action.host, connected: true };
        default:
            return state;
    }
};