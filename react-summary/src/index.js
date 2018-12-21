import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Routers from './router';

// 1,渲染路径
ReactDOM.render(<Routers />, document.getElementById('root'));

// 2,在APP.js渲染
// ReactDOM.render(<App />, document.getElementById('root'));

// 3,本文件渲染
    // 渲染helloWorld
// ReactDOM.render(
//     <h1>Hello, world!</h1>,
//     document.getElementById('root')
//   );

// 4,渲染定时器
//   function tick() {
//     const element = (
//       <div>
//         <h1>Hello, world!</h1>
//         <h2>It is {new Date().toLocaleTimeString()}.</h2>
//       </div>
//     );
//     ReactDOM.render(element, document.getElementById('root'));
//   }
//   setInterval(tick, 1000);

serviceWorker.unregister();
