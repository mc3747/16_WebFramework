import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Button } from 'antd-mobile';
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
        return (<div>3---容器组件{this.state.users.contacts}</div>);
    };
};

// 4，高阶组件：(Higher-Order Components):HOC，参数为组件，返回值为新组件的函数
// 高阶组件1：属性代理（可以是函数，也可以是class）
const Demo1 = (props) => {
    return (
        <div>
            My name is {props.name}
        </div>
    )
};
const HOC1 = (WrapperComponent) => {
    return class Permission1 extends Component {
        render() {
            console.log('✅' + this.props);
            return (
                <div>
                    <div>nihao - 1</div>
                    <WrapperComponent {...this.props} />
                </div>
            )
        }
    }
};
// 组合成的高阶组件
const WithDemo1 = HOC1(Demo1);

// 高阶组件2：反向继承(一定继承的是class，不能是函数)
class Demo2 extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div> My name is {this.props.name}</div>
        )
    }

}
const HOC2 = (WrapperComponent) => {
    return class Permission2 extends WrapperComponent {
        render() {
            return (
                <div>
                    <div>nihao - 2</div>
                    {super.render()}
                </div>
            );
        }
    }
};
const WithDemo2 = HOC2(Demo2);

// 5，渲染回调组件
class RenderCallbackCmp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: "5---渲染回调组件"
        };
    }

    render() {
        return this.props.children(this.state.msg);
    }
}
const ParentComponent = () =>
    (<RenderCallbackCmp>
        {msg =>
            <div>{msg}</div>}
    </RenderCallbackCmp>);


export default class Package extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {PureComponent('1---无状态组件')}
                <StatefulComponent para='2---有状态组件' />
                <UserListContainer />
                <WithDemo1 name='4---高阶组件1-属性代理' />
                <WithDemo2 name='4---高阶组件2-反向继承' />
                {ParentComponent()}
                <Button
                    style={{ width: '100px', height: '100px', backgroundColor: 'blue' }}
                    activeStyle={{ backgroundColor: '#FBC248' }}
                    onClick={() => { this.props.history.push('packageNormalListVC') }}>控制器
    </Button>
            </div>

        )
    }
}
