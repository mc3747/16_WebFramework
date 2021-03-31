import React, { Component } from 'react'

export default class Son extends Component {
   
   
    render() {
        return (
            <div>
                 <h3>这是子组件</h3>
                 {/* 在子组件里通过this.props.xx 接收到父组件传过来的值 */}
                <p>这是父组件传来的值：{this.props.name}</p>
                <p>这是父组件传来的值：{this.props.age}</p>
                
            </div>
        )
    }
}
