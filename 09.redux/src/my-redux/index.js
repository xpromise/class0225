/*
  redux向外暴露的方法：
    createStore(reducers) 接收一个reducers作为参数，返回值是一个store对象
    combineReducers({ reducer1, reducer2... }) 接收一个对象（包含n个reducer函数）作为参数，返回值是一个新的reducer函数
  store对象暴露的方法：
    getState() 返回值是管理的状态数据
    dispatch(action) 接收一个action作为参数，触发reducer调用，最终更新状态
    subscribe(listener) 接收一个函数作为参数，一旦状态发生了变化，就触发这个函数
 */

// 暴露createStore
export function createStore(reducers) {

  // 定义管理的状态数据
  // undefined为了让reducer使用默认值
  let state = reducers(undefined, {type: '@@redux/INIT'});
  // 定义listener容器
  const listenerContainers = [];

  // 读取状态数据的方法
  function getState() {
    return state;
  }

  // 触发更新的方法
  /*
    1. 触发reducer调用，得到新的状态数据newState
    2. 将state更新为newState
    3. 触发subscribe绑定的listener函数
   */
  function dispatch(action) {
    // 1. 触发reducer调用，得到新的状态数据newState
    const newState = reducers(state, action);
    // 2. 将state更新为newState
    state = newState;
    // 3. 触发subscribe绑定的listener函数
    listenerContainers.forEach((listener) => listener());
  }

  // 一旦状态发生了变化，就触发传入的函数
  function subscribe(listener) {
    listenerContainers.push(listener);
  }

  // 返回值是一个store对象
  return {
    getState,
    dispatch,
    subscribe
  }
}

// 暴露combineReducers
export function combineReducers(reducerObj) {

  // 返回值是一个reducer函数
  return function (prevState = {}, action) {

  }
}