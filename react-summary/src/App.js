import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

// import commonTool from './tool/commonTool.js';
// import { Link } from 'react-router-dom';
// import { Button } from 'antd-mobile';

// const sectionOneStyle = {
//     backgroundColor: '#B8CCE4'
// };
// const sectionTwoStyle = {
//     backgroundColor: '#71A154'
// };
// let color = commonTool.getRandomColorString();
// console.log('✅' + color);


// const clickToPush = (tt, address) => {
//     tt.props.history.push(address);
// };

// // 基础base，工具tool，封装package，总结summary

// /*主返回控件*/
// class App extends Component {
//     render() {
//         let buttonStyle = {
//             height: '100%',
//             width: '100%',
//             backgroundColor: this.color,
//             color: 'white'
//         };

//         return (
//             <div className="App">
//                 <header className="App-header">
//                     {/* 例子导航 */}
//                     <div style={sectionOneStyle}>
//                         {/* 点击button跳转 */}
//                         <Button
//                             style={buttonStyle}
//                             activeStyle={{ backgroundColor: '#FBC248' }}
//                             onClick={() => { clickToPush(this, 'selfDefinedComponent') }}>1，跳转到组件
//     </Button>
//                         <br />
//                         <Button
//                             style={buttonStyle}
//                             activeStyle={{ backgroundColor: '#FBC248' }}
//                             onClick={() => { clickToPush(this, 'props') }}>2，跳转到props
//     </Button>
//                         <br />
//                         <Button
//                             style={buttonStyle}
//                             activeStyle={{ backgroundColor: '#FBC248' }}
//                             onClick={() => { clickToPush(this, 'states') }}>3，跳转到states
//     </Button>
//                         <br />
//                         <Button
//                             style={buttonStyle}
//                             activeStyle={{ backgroundColor: '#FBC248' }}
//                             onClick={() => { clickToPush(this, 'jumpAnimate') }}>4，跳转到页面动画
//     </Button>
//                         <br />
//                         <Button
//                             style={buttonStyle}
//                             activeStyle={{ backgroundColor: '#FBC248' }}
//                             onClick={() => { clickToPush(this, 'jumpEvent') }}>5，跳转到事件
//     </Button>
//                         <br />
//                         <Button
//                             style={buttonStyle}
//                             activeStyle={{ backgroundColor: '#FBC248' }}
//                             onClick={() => { clickToPush(this, 'jumpRender') }}>6，跳转到渲染
//     </Button>
//                         <br />
//                         <Button
//                             style={buttonStyle}
//                             activeStyle={{ backgroundColor: '#FBC248' }}
//                             onClick={() => { clickToPush(this, 'jumpList') }}>7，跳转到列表
//     </Button>
//                         <br />
//                         <Button
//                             style={buttonStyle}
//                             activeStyle={{ backgroundColor: '#FBC248' }}
//                             onClick={() => { clickToPush(this, 'freshControl') }}>8，跳转到刷新控件
//     </Button>
//                         <br />
//                         <Button
//                             style={buttonStyle}
//                             activeStyle={{ backgroundColor: '#FBC248' }}
//                             onClick={() => { clickToPush(this, 'freshAndMore') }}>第三方刷新控件
//     </Button>
//                         <br />
//                     </div>

//                     {/* 2，集锦部分 */}
//                     <div style={sectionTwoStyle}>
//                         <Button
//                             style={buttonStyle}
//                             activeStyle={{ backgroundColor: '#FBC248' }}
//                             onClick={() => { clickToPush(this, 'packageController') }}>1，动画集锦
//     </Button>
//                     </div>


//                     {/* 点击link跳转 */}
//                     <Link to='selfDefinedComponent' style={{ color: 'red' }}>
//                         <div>点击跳转到Page1</div>
//                     </Link>

//                 </header>
//             </div>
//         );
//     }
// }

// export default App;


import { TabBar } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'redTab',
            hidden: false,
            fullScreen: false,
        };
    }
    // 界面渲染
    renderContent(pageText, bgColor) {
        return (
            <div style={{ backgroundColor: bgColor, height: '100%', textAlign: 'center' }}>

                <div style={{ paddingTop: 60 }}>Clicked “{pageText}” tab， show “{pageText}” information</div>

                <a style={{ display: 'block', marginTop: 40, marginBottom: 20, color: '#108ee9' }}
                    onClick={(e) => {
                        e.preventDefault();
                        this.setState({
                            hidden: !this.state.hidden,
                        });
                    }}
                >
                    1，Click to show/hide tab-bar
        </a>
                <a style={{ display: 'block', marginBottom: 40, color: '#108ee9' }}
                    onClick={(e) => {
                        e.preventDefault();
                        this.setState({
                            fullScreen: !this.state.fullScreen,
                        });
                    }}
                >
                    2，Click to switch fullscreen
        </a>
                <a style={{ display: 'block', marginBottom: 40, color: '#108ee9' }}
                    onClick={(e) => {
                        e.preventDefault();

                        this.props.history.push(pageText.toLowerCase());
                    }}
                >
                    3，Jump To {pageText} 详情
        </a>
            </div>
        );
    }

    render() {
        return (
            <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 400 }}>
                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#33A3F4"
                    barTintColor="white"
                    hidden={this.state.hidden}
                    tabBarPosition="bottom"
                >
                    {/* 1,基础-base */}
                    {<TabBar.Item
                        title="base"
                        key="Base"
                        icon={<div style={{
                            width: '22px',
                            height: '22px',
                            background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat'
                        }}
                        />
                        }
                        selectedIcon={<div style={{
                            width: '22px',
                            height: '22px',
                            background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat'
                        }}
                        />
                        }
                        selected={this.state.selectedTab === 'blueTab'}
                        badge={1}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'blueTab',
                            });
                        }}
                        data-seed="logId"
                    >
                        {this.renderContent('Base', '#87CEEB')}
                    </TabBar.Item>}

                    {/* 2,工具-tool */}
                    <TabBar.Item
                        icon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat'
                            }}
                            />
                        }
                        selectedIcon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat'
                            }}
                            />
                        }
                        title="tool"
                        key="Tool"
                        badge={'new'}
                        selected={this.state.selectedTab === 'redTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'redTab',
                            });
                        }}
                        data-seed="logId1"
                    >
                        {this.renderContent('Tool', '#FFB6C1')}
                    </TabBar.Item>

                    {/* 3,封装-package */}
                    <TabBar.Item
                        icon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat'
                            }}
                            />
                        }
                        selectedIcon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat'
                            }}
                            />
                        }
                        title="package"
                        key="Package"
                        dot
                        selected={this.state.selectedTab === 'greenTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'greenTab',
                            });
                        }}
                    >
                        {this.renderContent('Package', '#90EE90')}
                    </TabBar.Item>

                    {/* 4,总结-summary */}
                    <TabBar.Item
                        icon={<div style={{
                            width: '22px',
                            height: '22px',
                            background: 'url(https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg) center center /  21px 21px no-repeat'
                        }}
                        />}
                        selectedIcon={<div style={{
                            width: '22px',
                            height: '22px',
                            background: 'url(https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg) center center /  21px 21px no-repeat'
                        }}
                        />}
                        title="summary"
                        key="Summary"
                        selected={this.state.selectedTab === 'yellowTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'yellowTab',
                            });
                        }}
                    >
                        {this.renderContent('Summary', '#F0E68C')}
                    </TabBar.Item>


                </TabBar>
            </div>
        );
    }
}

export default App;