import React, { useState, useRef } from "react";
/*
ref是reference的缩写：参考，引用

*/ 
//useRef来传递参数
const App1 = () => {
    let nameRef = useRef({value:888});
    let [name, setName] = useState(nameRef.current.value);
    const submitButton = () => {
        setName(nameRef.current.value);
    };
    return (
        <div>
            <p>{name}</p>
            <div>
                <input ref={nameRef} type="text" />
                <button type="button" onClick={submitButton}>
                    Submit1
        </button>
            </div>
        </div>
    );
};
// 存在capture value问题
const App2 = () => {
    const [message, setMessage] = useState("");
    const showMessage = () => {
        alert("You said: " + message);
    };

    const handleSendClick = () => {
        setTimeout(showMessage, 3000);
    };

    const handleMessageChange = e => {
        setMessage(e.target.value);
    };

    return (
        <div>
            <input value={message} onChange={handleMessageChange} />
            <button onClick={handleSendClick}>Submit2</button>
        </div>
    );
};

//利用ref去掉capture value问题
const App3 = () => {
    const latestMessage = useRef("");

    const showMessage = () => {
        alert("You said: " + latestMessage.current);
    };

    const handleSendClick = () => {
        setTimeout(showMessage, 3000);
    };

    const handleMessageChange = e => {
        latestMessage.current = e.target.value;
    };
    return (
        <div>
            <input onChange={handleMessageChange} />
            <button onClick={handleSendClick}>Submit3</button>
        </div>
    );
};

// 简单的关联一个全局变量
const App4 = () => {
    const [value,setValue] = useState("默认值")

    const inputRef = useRef({value:0})

    const submitAction = () => {
        setValue(inputRef.current.value);
    };
    return (
        <div>
            <h1>{value}</h1>
            <input type="text" ref={inputRef} />
            <button onClick={()=>{
                console.log(inputRef.current.value);
                submitAction()
                }}>获取input 值</button>
            <button onClick={()=>{inputRef.current.focus()}}>获取input 焦点</button>
        </div>
    )
};

const UseRef = () => {
    return (
        <div>
            <App1></App1>
            <App2></App2>
            <App3 />
            <App4 />
        </div>
    );
};
export default UseRef;
