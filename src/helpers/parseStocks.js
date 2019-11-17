import * as moment from 'moment';

export const parseStockData =  (stocksArray) => {
    let stocksObj = {};
    for (const stock of stocksArray) {
        stocksObj = {
            ...stocksObj,
            [stock[0]]: {
                name: stock[0].toUpperCase(),
                value: parseFloat(stock[1].toFixed(2)),
                time: moment()
            }
        }
    }
    return stocksObj;
}

export const addTrends = (previous, newUpdate) => {
    let stocksObj = {};
    for (const stock in newUpdate) {
        const newStock = newUpdate[stock];
        const change = previous[stock] ? newStock.value - previous[stock].value : 0;
        const trend = change===0 ? "STABLE" : change > 0 ? "UP" : "DOWN";
        stocksObj = {
            ...stocksObj,
            [stock]: {
                ...newUpdate[stock],
                change: parseFloat(change.toFixed(2)),
                trend
            }
        }
    }
    return stocksObj;
}