import React, { Component } from 'react'
import Son from './son'
export default class Parent extends Component {
    constructor(){
        super()
        this.state= {
            name:"张三",
            age:66
        }
    }
    render() {
        return (
                <div>
                    <h3>这是父组件</h3>
                    {/* 这里是把this.state 中的name age 传给子组件 */}  
                    <Son name={this.state.name} age={this.state.age}/> 
                </div>
        )
    }
}
