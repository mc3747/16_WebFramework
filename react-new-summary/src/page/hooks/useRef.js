import React, { useState, useRef } from "react";
/*
ref是reference的缩写：参考，引用

*/ 
//useRef来传递参数
const App1 = () => {
    let [name, setName] = useState("Nate");
    let nameRef = useRef();
    const submitButton = () => {
        setName(nameRef.current.value);
    };
    return (
        <div className="App">
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
        <>
            <input value={message} onChange={handleMessageChange} />
            <button onClick={handleSendClick}>Submit2</button>
        </>
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
        <>
            <input onChange={handleMessageChange} />
            <button onClick={handleSendClick}>Submit3</button>
        </>
    );
};

const UseRef = () => {
    return (
        <div>
            <App1></App1>
            <App2></App2>
            <App3 />
        </div>
    );
};
export default UseRef;
