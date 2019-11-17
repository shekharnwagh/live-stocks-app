import React, { Component } from 'react';
import { connect } from 'react-redux';
import StocksTable from './stocks-table';
import './stocks.css'

class Stocks extends Component {
    constructor(props) {
        super(props);
    }

    renderError = () => (
        <div>
            No data to show
        </div>
    );

    render() {
        const stocksProps = this.props.stocks && Object.keys(this.props.stocks).length ?
            this.props.stocks : {};
        return (
            <div className="card container">
                <header className="App-header">
                    Live Stocks
                </header>
                {
                    Object.keys(stocksProps).length ?
                        <StocksTable stocks={this.props.stocks} /> :
                        <div className="no-data"> No Data </div>
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    stocks: state.stocks ? state.stocks.current : {}
})

const StocksComponent = connect(mapStateToProps)(Stocks);
export default StocksComponent;
