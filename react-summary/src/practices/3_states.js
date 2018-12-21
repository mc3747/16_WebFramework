import React, { Component } from 'react';
/*1,在父组件中设置 state， 并通过在子组件上使用 props 将其传递到子组件上。
  在 render 函数中, 我们设置 name 和 site 来获取父组件传递过来的数据
*/
class WebSite extends React.Component {
  constructor() {
      super();
      this.state = {
        name: "菜鸟教程",
        site: "https://www.runoob.com"
      }
    }
  render() {
    return (
      <div>
        <Name name={this.state.name} />
        <Link site={this.state.site} />
      </div>
    );
  }
}
 
class Name extends React.Component {
  render() {
    return (
      <h1>{this.props.name}</h1>
    );
  }
}
 
class Link extends React.Component {
  render() {
    return (
      <a href={this.props.site}>
        {this.props.site}
      </a>
    );
  }
}

/*2,定时器的封装*/
function FormattedDate(props) {
  return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
}

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <FormattedDate date={this.state.date} />
      </div>
    );
  }
}


export default class States extends Component {
  
    render() {
      return (
        <div>
           <div style={{myStyle,fontSize: '40px',color:'green'}}> {[3,4,6]} </div>
          <WebSite />
          <Clock />
        </div>
         
      )
    }
}

var myStyle = {
  fontSize: 50,
  color: '#FF0000'
};