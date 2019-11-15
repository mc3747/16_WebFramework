import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import commonTool from './tool/commonTool.js';
import { Link } from 'react-router-dom';
import { Button } from 'antd-mobile';

const sectionOneStyle = {
    backgroundColor: '#B8CCE4'
};
const sectionTwoStyle = {
    backgroundColor: '#71A154'
};
let color = commonTool.getRandomColorString();
console.log('✅' + color);


const clickToPush = (tt, address) => {
    tt.props.history.push(address);
};


/*主返回控件*/
class App extends Component {
    render() {
        let buttonStyle = {
            height: '100%',
            width: '100%',
            backgroundColor: this.color,
            color: 'white'
        };

        return (
            <div className="App">
                <header className="App-header">
                    {/* 官方示例： */}
                    {/* <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
          </p>
                    <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                        Learn React
          </a> */}
                    {/* 例子导航 */}
                    <div style={sectionOneStyle}>
                        {/* 点击button跳转 */}
                        <Button
                            style={buttonStyle}
                            activeStyle={{ backgroundColor: '#FBC248' }}
                            onClick={() => { clickToPush(this, 'selfDefinedComponent') }}>1，跳转到组件
    </Button>
                        <Button
                            style={buttonStyle}
                            activeStyle={{ backgroundColor: '#FBC248' }}
                            onClick={() => { clickToPush(this, 'props') }}>2，跳转到props
    </Button>

                        <Button
                            style={buttonStyle}
                            activeStyle={{ backgroundColor: '#FBC248' }}
                            onClick={() => { clickToPush(this, 'states') }}>3，跳转到states
    </Button>

                        <Button
                            style={buttonStyle}
                            activeStyle={{ backgroundColor: '#FBC248' }}
                            onClick={() => { clickToPush(this, 'jumpAnimate') }}>4，跳转到页面动画
    </Button>

                        <Button
                            style={buttonStyle}
                            activeStyle={{ backgroundColor: '#FBC248' }}
                            onClick={() => { clickToPush(this, 'jumpEvent') }}>5，跳转到事件
    </Button>

                        <Button
                            style={buttonStyle}
                            activeStyle={{ backgroundColor: '#FBC248' }}
                            onClick={() => { clickToPush(this, 'jumpRender') }}>6，跳转到渲染
    </Button>

                        <Button
                            style={buttonStyle}
                            activeStyle={{ backgroundColor: '#FBC248' }}
                            onClick={() => { clickToPush(this, 'jumpList') }}>7，跳转到列表
    </Button>
                    </div>
                    {/* 2，集锦部分 */}
                    <div style={sectionTwoStyle}>
                        <Button
                            style={buttonStyle}
                            activeStyle={{ backgroundColor: '#FBC248' }}
                            onClick={() => { clickToPush(this, 'packageController') }}>1，动画集锦
    </Button>
                    </div>


                    {/* 点击link跳转 */}
                    <Link to='selfDefinedComponent' style={{ color: 'red' }}>
                        <div>点击跳转到Page1</div>
                    </Link>

                </header>
            </div>
        );
    }
}

export default App;
