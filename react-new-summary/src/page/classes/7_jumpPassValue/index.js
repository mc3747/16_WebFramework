import React, { Component } from 'react'
import { Link } from 'react-router-dom'

/*

组件传值
*/


export default class JumpPassValue extends Component {
    render() {

        //设置参数
        var data = { id: 3, name: 'kk', age: 36 };

        //1,props.params传参，只能传string
        var dataString = JSON.stringify(data);
        var path1 = `/jumpTarget1/${dataString}`

        //2,query传值:不推荐:刷新页面参数丢失
        var path2 = {
            pathname: '/jumpTarget2',
            query: data,
        }

        //3,query传值:不推荐，刷新页面参数丢失
        var path3 = {
            pathname: '/jumpTarget3',
            state: data,
        }
        return (
            <div >
                <button onClick={() => this.gotoHome(path1)}>1-路由params传值</button><br />
                <button onClick={() => this.gotoHome(path2)}>2-路由querry传值</button><br />
                <button onClick={() => this.gotoHome(path3)}>3-路由state传值</button><br />

                <Link to={path1}>1-路由params传值</Link><br />
                <Link to={path2}>2-路由querry传值</Link><br />
                <Link to={path3}>3-路由state传值</Link><br />
                
                <button onClick={() => this.gotoHome('/jumpProps')}>4-propTypes传值</button><br />
                <button onClick={() => this.gotoHome('/jumpRedux')}>5-redux传值</button><br />
                <button onClick={() => this.gotoHome('/jumpContext')}>6-context传值</button><br />
                <button onClick={() => this.gotoHome('/jumpEventemit')}>7-eventemit传值</button><br />
            </div>
        )
    }
    gotoHome = (a) => {
        console.log(a)
        this.props.history.push(a)
    }
}

