import React, { Component } from 'react'

import Son from './son'
export default class Father extends Component {
    constructor(){
        super();
        this.state = {
            name:'',
            age:''
        }
    }
    //定义一个接收子组件传值的方法
    getChildValue = data => {
        this.setState({  // this.setState({}) 这里赋值有点像 小程序this.setData({})
            name:data.name,
            age:data.age
        })
    }
    
    render() {
        return (
            <div>
                <h3>这是父组件</h3>
                <p>接收子组件传来的值：{this.state.name}</p>
                <p>接收子组件传来的值：{this.state.age}</p>
                <Son callback={this.getChildValue} />
            </div>
        )
    }
}
