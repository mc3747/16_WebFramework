import React, { Component } from 'react'
import '../../common/css/word.css'
/*


*/ 


class Classes extends Component {
    render() {
        return (
            <div className="Word-header">
                <button onClick={()=>this.gotoHome('/selfDefinedComponent')}>1-跳转到selfDefinedComponent</button>
                <button onClick={()=>this.gotoHome('/props')}>2-跳转到props</button>
                <button onClick={()=>this.gotoHome('/states')}>3-跳转到states</button>
                <button onClick={()=>this.gotoHome('/render')}>4-跳转到render</button>
                <button onClick={()=>this.gotoHome('/event')}>5-跳转到event</button>
                <button onClick={()=>this.gotoHome('/passValue')}>6-跳转到passValue</button>
                {/* <button onClick={()=>this.gotoHome('/useContext')}>7-跳转到useContext</button> */}
            </div>
        )
    }
    gotoHome=(a)=> {
        console.log(a)
        this.props.history.push(a)
    }
}

export default Classes