import React, { Component } from "react";
const backgroundStyle1 = { backgroundColor: 'red' };
const backgroundStyle2 = { backgroundColor: 'green' };
const textStyle1 = { color: 'blue' };
const textStyle2 = { color: 'yellow' };
// 类组件
class App1 extends Component{
    constructor(props) {
        super(props);
        this.state ={textStyle:textStyle1}
    }
    doSomething = () => {
        console.log('渲染了子组件1');
    }
    render() {
        return <div style={{...this.props.bgStyle,...this.state.textStyle}}>
            我是父组件1
            <div style={backgroundStyle1} onClick={ this.doSomething } >我是子组件1</div>
        </div>;
    }
}
// 函数组件
function App2(props) {
    const handleClick = () => {
      console.log('渲染了子组件2');
    }
    return <div style={props.bgStyle}>
            我是父组件2
            <div onClick={handleClick}>我是子组件2</div>
        </div>;
  }

export default class ClassUseCallback extends Component{
    constructor (props) {
    super(props);
        this.state = {
            bgStyle1:backgroundStyle1,
            bgStyle2:backgroundStyle2,
        }
    }
    change1 =()=>{
        this.setState({bgStyle1:{backgroundColor: 'green' }})
    }
    change2 =()=>{
        this.setState({bgStyle2:{backgroundColor: 'red' }})
    }
    render() {
        let {bgStyle1,bgStyle2} = this.state;
        return (
          <div>
              <App1 bgStyle={bgStyle1 || backgroundStyle1}/>
              <App2 bgStyle={bgStyle2 || backgroundStyle2}/>
            <button onClick={this.change1}>改变组件1的颜色</button>
            <button onClick={this.change2}>改变组件2的颜色</button>
          </div>
        );
      }
}
