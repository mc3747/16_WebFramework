import React, { Component } from 'react';
import { Router, Route, Switch, withRouter } from 'react-router';

// 动画引入1
import AnimatedRouter from 'react-animated-router'; //我们的AnimatedRouter组件
import 'react-animated-router/animate.css'; //引入默认的动画样式定义

// 动画引入2
import { CSSTransitionGroup, TransitionGroup, CSSTransition } from 'react-transition-group';
import { Link } from 'react-router-dom';
import './Animate.css';

// 动画引入3（显示动画）
import QueueAnim from 'rc-queue-anim';

// 跳转路由
import App from './App';
import Package from './package/package';
import Summary from './summary/summary';
import Tool from './tool/tool';
import Base from './base/base';

import UseCallBackDemo from './summary/hooksSummary/hooks/useCallback/classUseCallback';

import createBrowserHistory from "history/createBrowserHistory";

const history = createBrowserHistory();
let styles = {
    leftNav: {
        width: '170px',
        position: 'fixed',
        top: '56px',
        height: '100%',
        background: 'lightblue'
    },
    content: {
        background: '#fff',
        position: 'absolute',
        top: '56px',
        left: '200px',
        width: '70%',
        height: '90%',
    },
    menu: {
        display: 'block',
        overflow: 'hidden'
    },
    list: {
        fontSize: "20px",
        listStyle: "none",
    },
    reset: {
        textDecoration: "none"
    }
}
let leftNav = () => {
    return (
        <nav>
            <ul>
                <li style={styles.list}><Link activeStyle={{ color: 'red' }} style={styles.reset} to="/com1">one</Link></li>
                <li style={styles.list}><Link activeStyle={{ color: 'red' }} style={styles.reset} to="/com2">two</Link></li>
                <li style={styles.list}><Link activeStyle={{ color: 'red' }} style={styles.reset} to="/com3">three</Link></li>
                <li style={styles.list}><Link activeStyle={{ color: 'red' }} style={styles.reset} to="/todo">todo</Link></li>
            </ul>
        </nav>
    )
}

class Routers extends Component {

    render() {
        return (

            <Router history={history}>
                {/* <Switch> 
            <AnimatedRouter> */}

                <QueueAnim >

                    <Route path="/" exact component={App} key='demo1' />

                    <Route path="/package" exact component={Package} key='package' />
                    <Route path="/base" exact component={Base} key='base' />
                    <Route path="/tool" exact component={Tool} key='tool' />
                    <Route path="/summary" exact component={Summary} key='summary' />
                    
                    <Route path="/useCallBackDemo" exact component={UseCallBackDemo} key='useCallBackDemo' />

                </QueueAnim>
                {/* </AnimatedRouter>      
            </Switch> */}
            </Router>

        )
    }
}
export default Routers;
