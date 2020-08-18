import React, { Component } from "react";
const { Provider, Consumer } = React.createContext(null);
const NumberContext = React.createContext();
function Bar() {
  return (
    <Consumer>
      {color => <div style={{ backgroundColor: color }}>{color}</div>}
    </Consumer>
  );
}
function Foo() {
  return <Bar />;
}

function Display() {
  return (
    <NumberContext.Consumer>
      {value => <div>The answer is {value}.</div>}
    </NumberContext.Consumer>
  );
}

function HH(){
    return (
        <Consumer>
        {user => (
          <NumberContext.Consumer>
            {notifications => (
               <div>
                颜色{user.color}! 水果:{notifications.fruit}
              </div>
            )}
          </NumberContext.Consumer>
        )}
      </Consumer>
    )
}

export default function ClassContext() {
  return (
    <div>
      {/* 单一的context */}
      <Provider value={"green"}>
        <Foo />
      </Provider>

        <NumberContext.Provider value={"西瓜"}>
            <Display />
        </NumberContext.Provider>

      {/* 不同的context */}
      <Provider value={{color:"green"}}>
        <NumberContext.Provider value={{fruit:"西瓜"}}>
            <HH />
        </NumberContext.Provider>
      </Provider>
      

    </div>
  );
}
