/*
  用来创建action对象的工厂函数模块。
    action: {type: 要执行什么操作, data: xxx}

    异步中间件将action creators进行分类：
      同步action creators 返回值action对象
      异步action creators 返回值是一个函数
 */

import { INCREMENT, DECREMENT, ERROR } from './action-types';

// 同步action creators
export const increment = (value) => ({type: INCREMENT, data: value});

export const decrement = (value) => ({type: DECREMENT, data: value});

export const error = (error) => ({type: ERROR, data: error});

// 异步action creators
export const incrementAsync = (value) => {
  // dispatch就是触发更新的方法
  return (dispatch) => {
    // 进行异步操作
    setTimeout(() => {
      // 请求成功，更新成功状态数据
      dispatch(increment(value));
      // 请求失败，更新失败状态数据
      // dispatch(error('请求失败了~'));
    }, 1000)
  }
};