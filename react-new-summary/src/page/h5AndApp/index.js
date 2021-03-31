import React, { Component } from 'react'

/*

组件传值
*/ 
export default class PassValue extends Component {
    render() {
        return (
            <div >
                <button onClick={()=>this.gotoHome('/callAppLib')}>1-h5唤起app_callAppLib</button>
                <button onClick={()=>this.gotoHome('/webLaunchApp')}>2-h5唤起app_webLaunchApp</button>
                
            </div>
        )
    }
    gotoHome=(a)=> {
        console.log(a)
        this.props.history.push(a)
    }
}

