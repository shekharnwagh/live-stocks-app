export const stocksUpdateAction = (stocks) => dispatch => {
    dispatch({
        type: 'STOCKS_UPDATE',
        payload: stocks
    })
}