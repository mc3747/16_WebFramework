import React, { Component } from 'react'
import Header from '../../component/header'
import '../../common/css/word.css'

class Home extends Component {
    render() {
        return (
            <div className="Word-header">
                <Header />
                <h1>Home page</h1>
            </div>
        )
    }
}

export default Home