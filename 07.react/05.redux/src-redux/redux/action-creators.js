/*
  用来创建action对象的工厂函数模块。
    action: {type: 要执行什么操作, data: xxx}
 */

import { INCREMENT, DECREMENT } from './action-types';

export const increment = (value) => ({type: INCREMENT, data: value});

export const decrement = (value) => ({type: DECREMENT, data: value});