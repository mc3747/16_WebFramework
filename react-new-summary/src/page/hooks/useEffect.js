import React, { useState, useEffect } from "react";
/*
effect：效果，作用，影响
*/

export default () => {
    const [num, setNum] = useState(0)
    const [count, setCount] = useState(1)

    useEffect(() => {
        //1-默认会执行1次，相当于 class 组件 生命周期的 compoentDidmount 
        //2-监听变量num的变化会执行一次(count的变化不执行)，相当于compoentDidUpdate
        console.log(`num: ${num}`)
        console.log(`count: ${count}`)

        // 组件在卸载时，将会执行 return 中内容
        return () => {
            //3-相当于 class 组件生命周期的 componentWillUnMount 
            console.log('测试')
        }
    }, [num])

    return (
        <div>
            <h1>{num}</h1>
            <button onClick={() => { setNum(num + 1) }}> 更新Num</button>
            <hr />
            <h1>{count}</h1>
            <button onClick={() => { setCount(count + 1) }}> 更新Count</button>
        </div>
    )
}