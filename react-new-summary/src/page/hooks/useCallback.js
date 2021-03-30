import React, { useCallback, useState, useEffect } from "react";
/*
callback：回调
*/
function SomeComponent() {
    return <div style={{ backgroundColor: 'yellow' }}></div>
}
export default function UseCallback() {

    const memoizedHandleClick = useCallback(() => {
        console.log('Click happened')
    }, []); // 空数组代表无论什么情况下该函数都不会发生改变

    return <SomeComponent onClick={memoizedHandleClick}>Click Me</SomeComponent>;
}
