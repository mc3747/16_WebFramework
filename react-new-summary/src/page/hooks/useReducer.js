import React, { useReducer,useContext } from "react";
/*
reducer：减速器

*/ 

// 例子1
const initialState1 = 0;
const reducer1 = (state, action) => {
  switch (action) {
    case 'increment': return state + 1;
    case 'decrement': return state - 1;
    case 'reset': return 0;
    default: throw new Error('Unexpected action');
  }
};

const Example01 = () => {
  const [count, dispatch] = useReducer(reducer1, initialState1);
  return (
    <div>
      {count}
      <button onClick={() => dispatch('increment')}>+1</button>
      <button onClick={() => dispatch('decrement')}>-1</button>
      <button onClick={() => dispatch('reset')}>reset</button>
    </div>
  );
};

// 例子2:action是对象
const initialState2 = {
  count: 0
};
function reducer2(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };
    case "decrement":
      return { count: state.count - action.payload };
    default:
      throw new Error();
  }
}
const Example02 = () =>{
  const [state, dispatch] = useReducer(reducer2, initialState2);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: "increment", payload: 5 })}>
        +5
      </button>
      <button onClick={() => dispatch({ type: "decrement", payload: 5 })}>
        -5
      </button>
    </>
  );
}
// 例子3:使用多个useReducer
const initialState3 = 0;
const reducer3 = (state, action) => {
  switch (action.type) {
    case 'increment': return state + 1;
    case 'decrement': return state - 1;
    case 'set': return action.count;
    default: throw new Error('Unexpected action');
  }
};
const Example03 = () => {
  const [count1, dispatch1] = useReducer(reducer3, initialState3);
  const [count2, dispatch2] = useReducer(reducer3, initialState3);
  return (
    <>
      <div>
        {count1}
        <button onClick={() => dispatch1({ type: 'increment' })}>例子3:+1</button>
        <button onClick={() => dispatch1({ type: 'decrement' })}>例子3:-1</button>
        <button onClick={() => dispatch1({ type: 'set', count: 0 })}>reset</button>
      </div>
      <div>
        {count2}
        <button onClick={() => dispatch2({ type: 'increment' })}>+1</button>
        <button onClick={() => dispatch2({ type: 'decrement' })}>-1</button>
        <button onClick={() => dispatch2({ type: 'set', count: 0 })}>reset</button>
      </div>
    </>
  );
};
// 例子4:input文本输入
const initialState4 = '';
const reducer4 = (state, action) => action;
const Example04 = () => {
  const [firstName, changeFirstName] = useReducer(reducer4, initialState4);
  const [lastName, changeLastName] = useReducer(reducer4, initialState4);
  return (
    <>
      <div>
        First Name:
        <TextInput value={firstName} onChangeText={changeFirstName} />
      </div>
      <div>
        Last Name:
        <TextInput value={lastName} onChangeText={changeLastName} />
      </div>
    </>
  );
};

const TextInput = ({ value, onChangeText }) => (
  <input type="text" value={value} onChange={e => onChangeText(e.target.value)} />
);

// 例子5:全局共享context
const initialState5 = 0;
const reducer5 = (state, action) => {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "set":
      return action.count;
    default:
      throw new Error("Unexpected action");
  }
};
const CountContext = React.createContext();

const CountProvider = ({ children }) => {
  const contextValue = useReducer(reducer5, initialState5);
  return (
    <CountContext.Provider value={contextValue}>
      {children}
    </CountContext.Provider>
  );
};

const useCount = () => {
  const contextValue = useContext(CountContext);
  return contextValue;
};
const Counter = () => {
  const [count, dispatch] = useCount();
  return (
    <div>
      {count}
      <button onClick={() => dispatch({ type: 'increment' })}>例子5:+1</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>例子5:-1</button>
      <button onClick={() => dispatch({ type: 'set', count: 0 })}>reset</button>
    </div>
  );
};
const Example05 = () => (
  <>
    <CountProvider>
      <Counter />
      <Counter />
    </CountProvider>
    <CountProvider>
      <Counter />
      <Counter />
    </CountProvider>
  </>
);



const UseReducer =()=>{
  return(
    <>
    <Example01></Example01>
    <Example02></Example02>
    <Example03></Example03>
    <Example04></Example04>
    <Example05></Example05>
    </>
  )
}
export default UseReducer