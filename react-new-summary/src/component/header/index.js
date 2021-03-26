import React, { Component } from 'react'
import './index.css'

class Header extends Component {
    render() {
        return (
            <div className="M-header">
                {this.props.param}Header
            </div>
        )
    }
}

export default Header