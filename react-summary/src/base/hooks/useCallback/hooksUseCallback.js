import React, { useCallback,useState,useEffect } from "react";
function Counter() {
    const [count, setCount] = useState(4);
    return (
      <>
        <p>
          count: {count}, random: {Math.random()}
        </p>
        <button onClick={() => setCount(count < 5 ? count + 1 : count)}>
          点击这里加1
        </button>
        <button onClick={() => setCount(count - 1)}>点击这里减1</button>
      </>
    );
  }
  
  export default function HooksUseCallback() {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);
    const [result, setResult] = useState(count);
    useEffect(() => {
      setInterval(() => {
        // setCount(prevCount => prevCount + 1);
        setCount2(prevCount => prevCount + 1);
      }, 1000);
    }, []);
  
    const handleChange = useCallback(() => {
      setResult(count + 1);
    }, [count]);
    // const handleChange = () => { setResult(count + 1) };
  
    return (
      <>
        <Counter count={count} />
        <Counter count={count2} />
        <Child onChange={handleChange} />
        <p>result: {result}</p>
      </>
    );
  }
 