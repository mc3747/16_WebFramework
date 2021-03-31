import React, { Component } from 'react'

export default class Son extends Component {
    constructor(){
        super()
        this.state = {
            name:'李四',
            age: 18
        }
    }
    //定义一个向 父组件 传值方法
    sendToValueParent = ()=> {
        this.props.callback({
            name: this.state.name,
            age:this.state.age
        })
    }
   
    render() {
        return (
            <div>
                <h3>这是子组件</h3>
                <button onClick={this.sendToValueParent}>传值给父组件</button>
            </div>
        )
    }
}
