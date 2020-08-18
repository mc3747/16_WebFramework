
import React, { Component } from 'react';
import { Button } from 'antd-mobile';

//自己简单的封装了一个，该有的参数都由了，可以自行粘贴在自己的代码里面去试试。
export default class JumpAnimate extends Component {

    render() {
        const clickToPush = (address) => {
            this.props.history.push('address');
        };
        return (
            <div>
                <div style={{ myStyle, fontSize: '40px', color: 'green' }}> {[3, 4, 6]} </div>
                <Button
                    style={{ backgroundColor: '#aaafff' }}
                    activeStyle={{ backgroundColor: '#FBC248' }}
                    onClick={() => { clickToPush('animateSummary') }}> 跳转到动画
             </Button>

            </div>

        )
    }
}

var myStyle = {
    fontSize: 50,
    color: '#FF0000'
};