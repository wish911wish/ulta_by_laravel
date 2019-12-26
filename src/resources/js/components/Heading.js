import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Heading extends Component {
    render() {
        return (
            <h1>
                { this.props.title }
            </h1>
        );
    }
}

if (document.getElementById('heading')) {
    ReactDOM.render(<Heading title="EVENTS"/>, document.getElementById('heading'));
}
