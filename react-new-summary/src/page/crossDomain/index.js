import React, { Component } from 'react'

/*
组件传值
*/ 
export default class CrossDomain extends Component {
    render() {
        return (
            <div >
                <button onClick={()=>this.gotoHome('/callAppLib')}>1-网络请求</button>

            </div>
        )
    }
    gotoHome=(a)=> {
        console.log(a)
        this.props.history.push(a)
    }
}