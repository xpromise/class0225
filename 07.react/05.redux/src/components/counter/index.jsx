import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import { increment, decrement } from '../../redux/action-creators';

export default class Counter extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired
  };

  state = {
    value: 1
  };

  handleChange = (e) => {
    this.setState({
      value: +e.target.value
    })
  };

  increment = () => {
    // 创建action对象
    const action = increment(this.state.value);
    // 调用dispatch方法
    this.props.store.dispatch(action);
  };

  decrement = () => {
    // 创建action对象
    const action = decrement(this.state.value);
    // 调用dispatch方法
    this.props.store.dispatch(action);
  };

  incrementIfOdd = () => {
    const num = this.props.store.getState();

    if ((num & 1) === 1) {
      // 创建action对象
      const action = increment(this.state.value);
      // 调用dispatch方法
      this.props.store.dispatch(action);
    }
  };

  incrementAsync = () => {
    setTimeout(() => {
      // 创建action对象
      const action = increment(this.state.value);
      // 调用dispatch方法
      this.props.store.dispatch(action);
    }, 1000)
  };

  render() {
    // 读取store对象的状态数据
    const num = this.props.store.getState();

    return <Fragment>
      <h2>click {num} times</h2>
      <select onChange={this.handleChange}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      <button onClick={this.increment}>+</button>
      <button onClick={this.decrement}>-</button>
      <button onClick={this.incrementIfOdd}>increment if odd</button>
      <button onClick={this.incrementAsync}>increment async</button>
    </Fragment>;
  }
}