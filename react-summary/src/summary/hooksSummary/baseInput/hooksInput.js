import React from 'react';
import Input from './input';
import useInput from './useInput';

// 用于验证邮箱的正则表达式
const EMAIL_REG = /\S+@\S+\.\S+/;

export default function HooksInput() {
 const email = useInput({
  initValue: '',
  helperText: '请输入有效的邮箱！',
  validator: value => EMAIL_REG.test(value),
  validateTriggers: ['onBlur'],
 });

 const password = useInput({
  initValue: '',
  helperText: '密码长度需要在 6-20 之间！',
  validator: value => value.length >= 6 && value.length <= 20,
  validateTriggers: ['onChange', 'onBlur'],
 });

 /**
  * 判断是否禁用按钮
  */
 function isButtonDisabled() {
  // 当邮箱或密码未填写时，或者邮箱或密码输入校验未通过时，禁用按钮
  return !email.value || !password.value || email.error || password.error;
 }

 /**
  * 处理表单提交
  */
 function handleButtonClick() {
  console.log('邮箱：', email.value);
  console.log('密码：', password.value);
 }

 return (
  <div>
   <Input {...email} label="邮箱" type="email" />
   <Input {...password} label="密码" type="password" />

   <button disabled={isButtonDisabled()} onClick={handleButtonClick}>
    登录
   </button>
  </div>
 );
}

