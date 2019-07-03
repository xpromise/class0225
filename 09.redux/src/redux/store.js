/*
  用来集中性管理状态数据的仓库
 */
import { createStore } from '../my-redux';

import reducers from './reducers';

export default createStore(reducers);