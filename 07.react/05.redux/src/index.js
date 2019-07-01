import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './App';
import store from './redux/store';

// Provider内部就会实现store.subscribe
// 一旦store状态发生变化，就会重新渲染组件
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));