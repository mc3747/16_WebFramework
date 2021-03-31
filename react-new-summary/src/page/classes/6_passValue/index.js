import React, { Component } from 'react'

/*


*/ 


class PassValue extends Component {
    render() {
        return (
            <div >
                <button onClick={()=>this.gotoHome('/fatherToSon')}>1-父传子</button>
                <button onClick={()=>this.gotoHome('/SonToFather')}>2-子传父</button>
                <button onClick={()=>this.gotoHome('/brotherToBrother')}>3-兄传弟</button>
            </div>
        )
    }
    gotoHome=(a)=> {
        console.log(a)
        this.props.history.push(a)
    }
}

export default PassValue