import React, { Component } from 'react';
export default class Event extends Component {
    activate3(para) {
        alert(para);
    };
    activate4 = (para) => {
        alert(para);
    }
    render() {
        return (
            <div>
                {/* 箭头函数的方法传参：组件内部和外部函数均可以 */}
                <button style={myStyle} onClick={() => { alert('111') }}>激活按钮0</button>
                <button style={myStyle} onClick={() => activate1('aa')}>激活按钮1</button>
                <button style={myStyle} onClick={() => activate2('bb')}>激活按钮2</button>
                <button style={myStyle} onClick={() => this.activate3('cc')}>激活按钮3</button>
                <button style={myStyle} onClick={() => this.activate4('dd')}>激活按钮4</button>

                {/* 绑定的方法传参：只有组件内部函数*/}
                <button style={myStyle} onClick={this.activate3.bind(this, 'ee')}>激活按钮5</button>

                <Toggle />
                <LikeButton />
            </div>

        )
    }
}

function activate1(para) {
    alert(para);
}
const activate2 = (para) => {
    alert(para);
}

// 自定义组件1
class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isToggleOn: true };

        // 1，这边绑定是必要的，这样 `this` 才能在回调函数中使用
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    // 2，这个语法确保了 `this` 绑定在  handleClick 中
    handleClick2 = (e) => {
        // 阻止默认的点击事件
        e.preventDefault();
        console.log('this is:', this);
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        );
    }
}

// 自定义组件2
class LikeButton extends React.Component {
    constructor() {
        super();
        this.state = {
            liked: false
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState({ liked: !this.state.liked });
    }
    render() {
        const text = this.state.liked ? 'liked' : 'haven\'t liked';
        return (
            <div onClick={this.handleClick}>
                You {text} this. Click to toggle.
            </div>
        );
    }
}

/*样式*/
var myStyle = {
    fontSize: 50,
    color: '#FF0000'
};