import React, { Component } from 'react';

// 引入使用容器组件
import Counter from './containers/counter';

export default class App extends Component {
  render() {
    return <Counter/>;
  }
}