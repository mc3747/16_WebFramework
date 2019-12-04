import React, { Component } from 'react';
export default class Base extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div style={{ height: document.documentElement.clientHeight - 40 }}>base</div>
        )
    }
}