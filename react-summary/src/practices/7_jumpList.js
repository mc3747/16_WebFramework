import React, { Component } from 'react';
const numbers = [1, 2, 3, 4, 5];
export default class JumpList extends Component {
    render(){
        return(
            <div>
                 {returnList()}
                 <NumberList1 numbers={numbers} />
                 <NumberList2 numbers={numbers} />
                 <NumberList3 numbers={numbers}/>
            </div>
        )
    }
}

// 1，函数表示
function returnList(){
    const numbers = [1, 2, 3, 4, 5];
    const listItems = numbers.map((numbers) =>
      <li>{numbers}</li>
    );
    return <ul>{listItems}</ul>;
}

// 2，带参数的函数表示
function NumberList1(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
      <li key={number.toString()}>
        {number}
      </li>
    );
    return (
      <ul>{listItems}</ul>
    );
  }


// 3，数组中每个元素绑定一个key值
  function ListItem(props) {
    // 对啦！这里不需要指定key:
    return <li>{props.value}</li>;
  }
  
  function NumberList2(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
      // 又对啦！key应该在数组的上下文中被指定
      <ListItem key={number.toString()}
                value={number} />
  
    );
    return (
      <ul>
        {listItems}
      </ul>
    );
  }

//   4，JSX 允许在大括号中嵌入任何表达式
function NumberList3(props) {
    var numbers;    //声明在外面是因为 {} 中不能出现var,const,let等这种关键字
    return (
    <ul>
      {
        numbers = props.numbers,  //注意这里要加逗号
        numbers.map((number) =>
        <ListItem key={number}
         value={number} />
      )}
    </ul>
    );
}