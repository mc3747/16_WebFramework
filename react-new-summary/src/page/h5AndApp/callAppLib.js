import React, { Component } from 'react'

/*

组件传值
*/ 
export default class PassValue extends Component {
    render() {
        return (
            <div >
                <button onClick={()=>this.gotoHome('/fatherToSon')}>点击跳转App</button>
            </div>
        )
    }
    gotoHome=(a)=> {
        console.log(a)
        this.props.history.push(a)
    }
}
