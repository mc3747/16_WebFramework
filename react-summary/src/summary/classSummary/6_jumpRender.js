import React, { Component } from 'react';
export default class JumpRender extends Component {
    render(){
        return(
            <div>
                 <Greeting isLoggedIn={false} />
                 <Greeting isLoggedIn={true} />
                 <LoginControl />
                 <Mailbox unreadMessages={''}/>
                 <Mailbox unreadMessages={'messages'} />
                 <Mailbox2 isLoggedIn={true}/>
                 <Page />
            </div>
        )
    }
}
// 1，条件渲染基础:参数控制，if表达式
function UserGreeting(props) {
    return <h1>欢迎回来!</h1>;
  }
  
  function GuestGreeting(props) {
    return <h1>请先注册。</h1>;
  }

  function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
      return <UserGreeting />;
    }
    return <GuestGreeting />;
  }
  function LoginButton(props) {
    return (
      <button onClick={props.onClick}>
        Login
      </button>
    );
  }
  
  function LogoutButton(props) {
    return (
      <button onClick={props.onClick}>
        Logout
      </button>
    );
  }

// 2，条件渲染:与运算符 &&
function Mailbox(props) {
    const unreadMessages = props.unreadMessages;
    return (
      <div>
        <h1>Hello!</h1>
        {unreadMessages.length > 0 &&
          <h2>
            您有 {unreadMessages.length} 条未读信息。
          </h2>
        }
      </div>
    );
  }

// 3，条件渲染:三目运算符
function Mailbox2(props) {
    const isLoggedIn = props.isLoggedIn;
    return (
      <div>
        The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.
      </div>
    );
}

// 4,阻止渲染
function WarningBanner(props) {
    if (!props.warn) {
      return null;
    }
   
    return (
      <div className="warning">
        警告!
      </div>
    );
  }
   
class Page extends React.Component {
    constructor(props) {
      super(props);
      this.state = {showWarning: true}
      this.handleToggleClick = this.handleToggleClick.bind(this);
    }
   
    handleToggleClick() {
      this.setState(prevState => ({
        showWarning: !prevState.showWarning
      }));
    }
   
    render() {
      return (
        <div>
          <WarningBanner warn={this.state.showWarning} />
          <button onClick={this.handleToggleClick}>
            {this.state.showWarning ? '隐藏' : '显示'}
          </button>
        </div>
      );
    }
  }


//   封装组件
  class LoginControl extends React.Component {
    constructor(props) {
      super(props);
      this.handleLoginClick = this.handleLoginClick.bind(this);
      this.handleLogoutClick = this.handleLogoutClick.bind(this);
      this.state = {isLoggedIn: false};
    }
   
    handleLoginClick() {
      this.setState({isLoggedIn: true});
    }
   
    handleLogoutClick() {
      this.setState({isLoggedIn: false});
    }
   
    render() {
      const isLoggedIn = this.state.isLoggedIn;
   
      let button = null;
      if (isLoggedIn) {
        button = <LogoutButton onClick={this.handleLogoutClick} />;
      } else {
        button = <LoginButton onClick={this.handleLoginClick} />;
      }
   
      return (
        <div>
          <Greeting isLoggedIn={isLoggedIn} />
          {button}
        </div>
      );
    }
  }
   
