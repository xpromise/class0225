/*
  根据之前的状态和action来生成新的状态
 */
import { combineReducers } from '../my-redux';
import { INCREMENT, DECREMENT } from './action-types';

function num(prevState = 0, action) {
  console.log('num: ', prevState, action);

  switch (action.type) {
    case INCREMENT :
      return prevState + action.data;
    case DECREMENT :
      return prevState - action.data;
    default :
      return prevState;
  }
}

function category(prevState = [], action) {
  console.log('category: ', prevState, action);

  switch (action.type) {
    default :
      return prevState;
  }
}

// store对象管理的数据就是num
// export default num;

// store对象管理的数据就是 {  }
export default combineReducers({
  num,
  category
})
