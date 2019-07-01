/*
  根据之前的状态和action来生成新的状态
 */

import { INCREMENT, DECREMENT } from './action-types';
/*
  函数名一般就和管理的状态数据相关。
  初始化状态数据。
  store管理状态数据都是来自于reducers函数的返回值。
 */
function num(prevState = 0, action) {
  switch (action.type) {
    case INCREMENT :
      return prevState + action.data;
    case DECREMENT :
      return prevState - action.data;
    default :
      return prevState;
  }
}

// 暴露出去
export default num;