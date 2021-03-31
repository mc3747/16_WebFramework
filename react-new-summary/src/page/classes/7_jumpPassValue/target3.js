import React, { Component } from 'react'
export default class Target3 extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
       //3，state传值
       var data = this.props.location.state;
       var { id, name, age } = data;
        
        return (<div>传递的name值为{name}</div>)
    }
}