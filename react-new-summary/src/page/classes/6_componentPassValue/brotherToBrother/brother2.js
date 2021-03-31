import React, { Component } from 'react'
import bus from './bus' /*一定要导入bus */

export default class Brother2 extends Component {
    
     //向brother1传值
    sendValueBrother1 = ()=>{
        bus.emit('sendVal',{
            name:'周芷若',
            age:600
        })
    }
    // dom节点渲染完毕
    componentDidMount(){
        //接收brother1传来的值
        bus.on('sendValue',data =>{
            console.log(data)
        })
    }

    render() {
        return (
            <div>
                <h3>兄弟2组件</h3> <br/>
                <button onClick={this.sendValueBrother1}>传值给brother1</button>

            </div>
        )
    }
}
import React, { Component } from 'react'
import bus from './bus' /*一定要导入bus */

export default class Brother2 extends Component {
    
     //向brother1传值
    sendValueBrother1 = ()=>{
        bus.emit('sendVal',{
            name:'周芷若',
            age:600
        })
    }
    // dom节点渲染完毕
    componentDidMount(){
        //接收brother1传来的值
        bus.on('sendValue',data =>{
            console.log(data)
        })
    }

    render() {
        return (
            <div>
                <h3>兄弟2组件</h3> <br/>
                <button onClick={this.sendValueBrother1}>传值给brother1</button>

            </div>
        )
    }
}
