import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from './my-react-redux';
import store from './redux/store';
import App from './App';

// Provider 1. 更新组件  2. 哪个容器组件需要使用store对象，帮你传进去（使用context传递数据）
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));