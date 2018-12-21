
import React, { Component } from 'react';

//自己简单的封装了一个，该有的参数都由了，可以自行粘贴在自己的代码里面去试试。

  
export default class JumpAnimate extends Component {
  
    render() {
      return (
        <div>
           <div style={{myStyle,fontSize: '40px',color:'green'}}> {[3,4,6]} </div>
          
        </div>
         
      )
    }
}

var myStyle = {
  fontSize: 50,
  color: '#FF0000'
};