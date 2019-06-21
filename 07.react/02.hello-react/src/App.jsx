/*
  应用主组件
 */
// 组件/模块中需要使用的内容，都需要引入
import React from 'react';

// 引入其他组件
import Login from './components/login';
import Register from './components/register';
// 没有状态数据，也不需要使用生命周期函数，这时候会考虑定义成工厂函数组件
function App() {
  return (
    <div>
      <Login />
      <Register />
    </div>
  );
}

// 暴露出去
export default App;