import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import store from './redux/store';

// 一旦store对象管理的状态数据发生变化，就会触发调用render函数
store.subscribe(render);
// 初始化渲染
render();
function render() {
  ReactDOM.render(<App />, document.getElementById('root'));
}