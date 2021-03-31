import React, { Component } from 'react'
import bus from './bus' /*一定要导入bus */

export default class Brother1 extends Component {

    // dom节点渲染完毕
    componentDidMount(){
        //接收brother2传来的值
        bus.on('sendVal',data=>{
            console.log(data)
        })
    }
    //向brother2传值
    sendValueBrother2 = ()=>{
        bus.emit('sendValue',{
            name:'赵敏',
            age:600
        })
    }
    render() {
        return (
            <div>
                <h3>兄弟1组件</h3>
                <button onClick={this.sendValueBrother2}>传值给兄弟2</button>
            </div>
        )
    }
}
