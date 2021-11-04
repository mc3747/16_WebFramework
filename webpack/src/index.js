// 1. 使用 ES6 导入语法，导入 jQuery
import $ from 'jquery'
// 2. 定义 jQuery 的入口函数
$(function () {
    // 3. 实现奇偶行变色
    // 奇数行为红色
    $('li:odd').css('background-color', 'red')
    $('li:even').css('background-color', 'pink')
    // 0 是偶数
    // 1 是奇数
  })
  