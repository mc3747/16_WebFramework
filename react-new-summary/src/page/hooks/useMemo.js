import React, { useMemo, useState } from "react";
/*
memo是memory的缩写：记忆，存储

*/ 
function Child1(props) {
    console.log('渲染a')
    return <div style={{ backgroundColor: 'yellow' }}>{props.a}</div>
}
function Child2(props) {
    console.log('渲染b')
    return <div style={{ backgroundColor: 'purple' }}>{props.b}</div>
}
function Parent({ a, b }) {

    const child1 = useMemo(() => <Child1 a={a} />, [a]);
    const child2 = useMemo(() => <Child2 b={b} />, [b]);

    return (
        <div>
            {child1}
            {child2}

        </div>
    )
}
const UseMemo = () => {
    const [A, setA] = useState(1);
    function change() {
        setA(3)
    }
    return <div>
        {Parent({ a: A, b: 2 })}
        <button onClick={() => change()}>点我改变文字</button>
    </div>
}
export default UseMemo