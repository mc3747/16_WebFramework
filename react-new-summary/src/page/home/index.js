import React, { Component } from 'react'
import Header from '../../component/header'
import '../../common/css/word.css'

class Home extends Component {
    render() {
        return (
            <div className="Word-header">
                <Header param="home的"/>
                <h1>Home page</h1>
                <button onClick={()=>{this.gotoHome('/home')}}>跳转Home页1</button>
                <button onClick={()=>{this.gotoHome.bind(this,'/home')}}>跳转Home页2</button>
                <button onClick={()=>{e=>this.gotoHome(e,'/home')}}>跳转Home页3</button>
            </div>
        )
    }
    gotoHome=(a)=> {
        console.log(a)
        this.props.history.push(a)
    }
    gotoHome=(e,a)=> {
        console.log(a)
        this.props.history.push(a)
    }
}

export default Home