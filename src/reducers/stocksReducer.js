import { addTrends } from '../helpers/parseStocks'

export default (state = {}, action) => {
    const previous = state && state.previous ? state.previous : {};
    const current = state && state.current ? state.current : {};
    const newUpdate = addTrends(current, action.payload);
    
    switch (action.type) {
        case 'STOCKS_UPDATE':
            return {
                    previous: {
                        ...previous,
                        ...current
                    },
                    current: {
                        ...current,
                        ...newUpdate
                    }
                }
        default:
            return state.stocks ? state.stocks : {}
    }
}