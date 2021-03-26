import React, { Component } from 'react'
import Header from '../../component/header'
import '../../common/css/word.css'

class Home extends Component {
    render() {
        return (
            <div className="Word-header">
                <Header param="login的"/>
                <h1>Login page</h1>
                <button onClick={()=>{this.gotoHome()}}>跳转Home页</button>
            </div>
        )
    }
    gotoHome() {
        this.props.history.push('/home')
    }
}

export default Home