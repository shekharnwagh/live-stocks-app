export default (state = {}, action) => {
    switch (action.type) {
        case 'WS_CONNECTED':
            return { ...state, host: action.host, connected: true };
        default:
            return state;
    }
};