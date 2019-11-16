import React, { Component } from 'react';
import { connect } from 'react-redux';
import { wsConnect } from '../actions/webSocketActions';

class WebSocketConnection extends Component {
    componentDidMount() {
        const { dispatch, host } = this.props;
        dispatch(wsConnect(host))
    }

    render() {
        return <div>{this.props.children}</div>;
    }
}

export default connect()(WebSocketConnection);
