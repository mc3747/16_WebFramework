import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';
import {Button} from 'antd-mobile';
import{ ReactDOM } from 'react-dom';

const clickToPush = (tt,address) =>{
  tt.props.history.push(address);
}


/*主返回控件*/
class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
{/* 官方示例： */}
          <img src={logo} className="App-logo" alt="logo" />

          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>

          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React
          </a>

{/* 点击button跳转 */}
    <Button 
      style={{height:'100%',width:'100%',backgroundColor:'red',color:'white'}} 
      activeStyle = {{backgroundColor:'#FBC248'}}
      onClick={()=>{clickToPush(this,'selfDefinedComponent')}}>跳转到组件
    </Button>
    <Button 
      style={{height:'100%',width:'100%',backgroundColor:'green',color:'white'}} 
      activeStyle = {{backgroundColor:'#FBC248'}}
      onClick={()=>{clickToPush(this,'props')}}>跳转到props
    </Button>

    <Button 
      style={{height:'100%',width:'100%',backgroundColor:'blue',color:'white'}} 
      activeStyle = {{backgroundColor:'#FBC248'}}
      onClick={()=>{clickToPush(this,'states')}}>跳转到states
    </Button>

{/* 点击link跳转 */}
    <Link to='selfDefinedComponent' style={{color:'red'}}>
				<div>点击跳转到Page1</div>
		</Link>

        </header>
      </div>
    );
  }
}

export default App;
