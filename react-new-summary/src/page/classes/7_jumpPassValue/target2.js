import React, { Component } from 'react'
export default class Target2 extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        //2，querry传值
        var data = this.props.location.query;
        var { id, name, age } = data;
        return (<div>传递的name值为{data.name}</div>)
    }
}