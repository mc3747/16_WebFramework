import React, { Component,useState } from 'react';
import { Button } from 'antd-mobile';

import ClassButton from './hooks/useState/classState';
import HooksButton from './hooks/useState/hooksUseState';
import ClassEffect from './hooks/useEffect/classEffect'
import HooksUseState from './hooks/useEffect/hooksUseState'
import ClassContext from './hooks/useContext/classContext'
import HooksUseContext from './hooks/useContext/hooksUseContext'

import HooksUseReducer from './hooks/useReducer/hooksUseReducer'
import { Link } from 'react-router-dom';

export default class Base extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        
        return (
            <div className="App"> 
                <ClassButton/>
                <HooksButton/>
                <ClassEffect/>
                <HooksUseState/>
                <ClassContext />
                <HooksUseContext />
                <HooksUseReducer />
                
                 <Link to="/HooksListVC" style={{color:'black'}}>
                    <div>点击跳转到Page3</div></Link>

                 {/* <button onClick={()=>{this.props.history.push('/src/base/hooks/hooksList')}}>跳转到hooks的list</button> */}
            </div>
        )
    }
}