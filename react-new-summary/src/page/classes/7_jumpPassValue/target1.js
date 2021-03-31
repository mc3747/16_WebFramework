import React, { Component } from 'react'
export default class Target1 extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        //1,props.params传值
        var data = JSON.parse(this.props.match.params.data);
        var { id, name, age } = data;
        return (<div>传递的name值为{name}</div>)
    }
}