import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

export default class Counter extends Component {
  static propTypes = {
    num: PropTypes.number.isRequired,
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
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
    this.props.increment(this.state.value);
  };

  decrement = () => {
    this.props.decrement(this.state.value);
  };

  incrementIfOdd = () => {
    const { num } = this.props;
    if ((num & 1) === 1) {
      this.props.increment(this.state.value);
    }
  };

  incrementAsync = () => {
    setTimeout(() => {
      this.props.increment(this.state.value);
    }, 1000)
  };

  render() {
    // 读取store对象的状态数据
    const { num } = this.props;

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