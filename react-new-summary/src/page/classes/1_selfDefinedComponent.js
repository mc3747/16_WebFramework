import React, { Component } from 'react';

/*1,外部定义控件*/
function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}
const user = {
  firstName: 'Demo',
  lastName: '1'
};
const element = (
  <h1>
    Hello, {formatName(user)}!
  </h1>
);

/*2,函数直接返回控件*/
function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Demo2!</h1>;
}

export default class SelfDefinedComponent extends Component {
  render() {
    return (
      <div>
        {element}
        {getGreeting()}
      </div>

    )
  }
}