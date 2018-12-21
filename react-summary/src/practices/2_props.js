import React, { Component } from 'react';

/*1,利用函数:无状态直接参数*/
function Welcome1(paras) {
  return <h1>Hello, {paras}</h1>;
}
const demo1 = Welcome1('demo1');

/*2,利用函数：props来自定义组件*/
function Welcome2(props) {
  return <h1>Hello, {props.name}</h1>;
}
const demo3 = <Welcome2 name='demo3'/>;


/*3,利用类：props来自定义组件*/
class Welcome3 extends React.Component {
  constructor(props) { super(props);}
  render() {
    return <h1>Hello ,{this.props.name}</h1>;
  }
}
Welcome3.defaultProps = {
  name: '默认name'
};
var demo6 = <Welcome3 name = 'demo6' />;
var demo7 = <Welcome3 />;

/*4,利用props来返回组合控件*/
function Name(props) {
  return <h3>网站名称：{props.name}</h3>;
}
function Url(props) {
  return <h3>网站地址：{props.url}</h3>;
}
function Nickname(props) {
  return <h3>网站小名：{props.nickname}</h3>;
}
function Welcome4() {
  return (
  <div style={{background:'red'}}>
      <Name name="菜鸟教程" />
      <Url url="http://www.runoob.com" />
      <Nickname nickname="Runoob" />
  </div>
  );
}

/*5，利用props抽象出可复用的复杂的组合控件*/
function formatDate(date) {
  return date.toLocaleDateString();
}

function Avatar(props) {
  return (
    <img className="Avatar"
         src={props.user.avatarUrl}
         alt={props.user.name} />
  );
}

function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.user} />
      <div className="UserInfo-name">
        {props.user.name}
      </div>
    </div>
  );
}

function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author} />
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}
const comment = {
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'http://placekitten.com/g/64/64'
  }
};

export default class Props extends Component {
 
    render() {
      return (
        <div>
          {demo1}
          {Welcome1('Demo2')}
          {demo3}
          <Welcome2 name="Demo4" />
          <Welcome3 name='demo5'/>
          {demo6}
          {demo7}
          <Welcome4/>
          <Comment date={comment.date} text={comment.text} author={comment.author} />
        </div>
      )
    }
}