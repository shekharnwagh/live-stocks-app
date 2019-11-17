import React, { Component } from 'react';
import './stocks.css'

export default class StocksTable extends Component {
    renderRows = (props) => {
        const stocks = Object.keys(props);
        return stocks.map((stock) => {
            const { name, value, time, trend } = props[stock];
            const lastUpdate = time.fromNow(true);
            const className = trend==="UP" ? "bg-success font-white" : trend==="DOWN" ? "bg-danger font-white" : ""
            return (
                <tr className={className}>
                    <td>{ name }</td>
                    <td>{ value }</td>
                    <td>{ lastUpdate }</td>
                </tr>
            )
        })
    }

    render() {
        return(
            <div className="table-responsive-sm">
                <table className="table table-sm table-hover table-custom">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Ticker</th>
                            <th scope="col">Price</th>
                            <th scope="col">Last Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderRows(this.props.stocks)}
                    </tbody>
                </table>
            </div>
        )
    }
}