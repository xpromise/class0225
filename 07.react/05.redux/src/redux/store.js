/*
  用来集中性管理状态数据的仓库
 */

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'

import reducers from './reducers';
// 创建store对象
// 开发使用
const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
// 上线使用
// const store = createStore(reducers, applyMiddleware(thunk));
// 暴露出去
export default store;