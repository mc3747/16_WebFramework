import React, { Component } from 'react'
import axios from 'axios'
import useFetch from "./hooksDemo/useFetch"

/*
组件传值
*/
export default class NetworkRequest extends Component {
    render() {
        return (
            <div >
                <button onClick={() => this.ajaxDemo()}>1--Ajax</button>
                <button onClick={() => this.axiosDemo()}>2__Axios</button>
                <button onClick={() => this.fetchDemo()}>3__fetch</button>
                <button onClick={() => this.gotoHome("/hookDemo")}>4__自定义hook</button>
                <button onClick={() => this.gotoHome("/hookDemo")}>5__react-query</button>
            </div>
        )
    }
    // 1-Ajax
    ajaxDemo() {
        const Http = new XMLHttpRequest();
        const url = 'https://jsonplaceholder.typicode.com/posts';
        Http.open("GET", url);
        Http.send();

        Http.onreadystatechange = (e) => {
            console.log(Http.responseText)
        }
    }

    // 2-Axios
    /*
      1、安装axios模块npm install axios  --save  
      2、在哪里使用就在哪里引入import axios from 'axios'
      3、看文档使用
    */
    axiosDemo() {
        var api = 'https://jsonplaceholder.typicode.com/posts';
        axios.get(api)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    // 3-fetch
    
    fetchDemo() {
        const Url = 'https://jsonplaceholder.typicode.com/posts';
        const Data = {
            name: "Said",
            id: 23
        };
        const otherParam = {
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(Data),
            method: "POST"
        };
        fetch(Url, otherParam)
            .then(data => { return data.json() })
            .then(res => { console.log(res) })
            .catch(error => { console.log(error) })
    }
    // 4-hooks
    hooksDemo() {

    }
    // 5-react-query
    /*
      1、安装axios模块npm install react-query -save 
      2、在哪里使用就在哪里引入import 
      3、看文档使用
    */
    reactQueryDemo() {

    }

    gotoHome = (a) => {
        console.log(a)
        this.props.history.push(a)
    }

}