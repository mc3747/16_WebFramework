import React, { Component } from 'react'
import Header from '../../component/header'
import '../../common/css/word.css'

class Home extends Component {
    render() {
        return (
            <div className="Word-header">
                <Header param="home的"/>
                <h1>Home page</h1>
                {/* 🌈：按钮点击传参的三种方式 */}
                <button onClick={()=>this.gotoHome1('/hooks')}>1-跳转到hooks示例</button>
                <button onClick={this.gotoHome1.bind(this,'/classes')}>2-跳转到classes示例</button>
                <button onClick={e=>this.gotoHome2(e,'/welcome')}>3-跳转redux示例</button>
                <button onClick={e=>this.gotoHome2(e,'/welcome')}>4-跳转ant design示例</button>
            </div>
        )
    }
    gotoHome1=(a)=> {
        console.log(a)
        this.props.history.push(a)
    }
    gotoHome2=(e,a)=> {
        console.log(a)
        this.props.history.push(a)
    }
}

export default Home