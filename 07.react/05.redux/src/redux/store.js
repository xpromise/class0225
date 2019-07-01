/*
  用来集中性管理状态数据的仓库
 */

import { createStore } from 'redux';

import reducers from './reducers';
// 创建store对象
const store = createStore(reducers);
// 暴露出去
export default store;