import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
// 1,无状态组件
const PureComponent = (props) => (
    <div>
        {props}
    </div>
)

// 2,有状态组件
class StatefulComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //定义状态
        }
    }
    componentWillMount() {
        //do something
    }

    componentDidMount() {
        //do something
    }
    //其他生命周期

    render() {
        return (
            <div>{this.props.para}</div>
        );
    }
}

// 3,容器组件:充当数据源(跨域)
class UserListContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: {}
        }
    };

    componentDidMount() {
        const _this = this;
        axios.get('https://api.androidhive.info/contacts/')
            .then(function (response) {
                _this.setState({ users: response });
            }).catch(function (error) {
                console.log(error);
            });
    };

    render() {
        return (<div>容器组件{this.state.users.contacts}</div>);
    };
};
// 4，高阶组件：
//检验规则，表格组件
// const FormValidator = (WrappedComponent, validator, trigger) => {

//     getTrigger(trigger, validator) {
//         var originTrigger = this.props[trigger];

//         return function (event) {
//             //触发验证机制,更新状态
//             // do something ...
//             originTrigger(event);
//         }
//     }

//     var newProps = {
//         ...this.props,
//         [trigger]: this.getTrigger(trigger, validator) //触发时机,重新绑定原有触发机制
//     };

//     return <WrappedComponent  {...newProps} />
// }

export default class Package extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                {PureComponent('无状态组件')}
                <StatefulComponent para='有状态组件' />
                <UserListContainer />
            </div>

        )
    }
}
