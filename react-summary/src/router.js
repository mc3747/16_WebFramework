import React, { Component } from 'react';
import { Router, Route ,Switch,withRouter} from 'react-router';
// 动画引入1
import AnimatedRouter from 'react-animated-router'; //我们的AnimatedRouter组件
import 'react-animated-router/animate.css'; //引入默认的动画样式定义

// 动画引入2
import {CSSTransitionGroup,TransitionGroup, CSSTransition} from 'react-transition-group' ;
import {Link} from 'react-router-dom';
import './Animate.css';

// 动画引入3（显示动画）
import QueueAnim from 'rc-queue-anim';

// 跳转路由
import App from './App';
import SelfDefinedComponent from './practices/1_selfDefinedComponent';
import Props from './practices/2_props';
import States from './practices/3_states';
import JumpAnimate from './practices/4_jumpAnimate';
import JumpEvent from './practices/5_jumpEvent';
import JumpRender from './practices/6_jumpRender';
import JumpList from './practices/7_jumpList';

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
          <li style={styles.list}><Link activeStyle={{color: 'red'}} style={styles.reset} to="/com1">one</Link></li>
          <li style={styles.list}><Link activeStyle={{color: 'red'}} style={styles.reset} to="/com2">two</Link></li>
          <li style={styles.list}><Link activeStyle={{color: 'red'}} style={styles.reset} to="/com3">three</Link></li>
          <li style={styles.list}><Link activeStyle={{color: 'red'}} style={styles.reset} to="/todo">todo</Link></li>
        </ul>
      </nav>
    )
  }

class Routers extends Component {
   
    render(){      
        return(       
      
        <Router history={ history }>
            {/* <Switch> 
            <AnimatedRouter> */}

            <QueueAnim >
          
                        <Route path="/"  exact component={App} key='demo1'/>
                        <Route path="/selfDefinedComponent"  exact component={SelfDefinedComponent} key='demo2'/>
                        <Route path="/props"  exact component={Props} key='demo3'/>
                        <Route path="/states"  exact component={States} key='demo4'/> 
                        <Route path="/jumpAnimate"  exact component={JumpAnimate} key='demo5'/>   
                        <Route path="/jumpEvent"  exact component={JumpEvent} key='demo6'/>   
                        <Route path="/jumpRender"  exact component={JumpRender} key='demo7'/>
                        <Route path="/jumpList"  exact component={JumpList} key='demo8'/>      
              </QueueAnim>   
            {/* </AnimatedRouter>      
            </Switch> */}
         </Router>  

        )
    }   
}
export default Routers;
