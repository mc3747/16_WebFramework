import React, { Component } from 'react'
import '../../common/css/word.css'
/*
官方参考链接：https://zh-hans.reactjs.org/docs/hooks-reference.html
参考文章：https://github.com/happylindz/blog/issues/19
好文章：https://juejin.cn/post/6844903918577664007
hooks的原理核心
常见hooks
自定义hooks
*/ 


class Hooks extends Component {
    render() {
        return (
            <div className="Word-header">
                <button onClick={()=>this.gotoHome('/useState')}>1-跳转到useState</button>
                <button onClick={()=>this.gotoHome('/useEffect')}>2-跳转到useEffect</button>
                <button onClick={()=>this.gotoHome('/useRef')}>3-跳转到useRef</button>
                <button onClick={()=>this.gotoHome('/useMemo')}>4-跳转到useMemo</button>
                <button onClick={()=>this.gotoHome('/useCallback')}>5-跳转到useCallback</button>
                <button onClick={()=>this.gotoHome('/useReducer')}>6-跳转到useReducer</button>
                <button onClick={()=>this.gotoHome('/useContext')}>7-跳转到useContext</button>
            </div>
        )
    }
    gotoHome=(a)=> {
        console.log(a)
        this.props.history.push(a)
    }
   
}

export default Hooks