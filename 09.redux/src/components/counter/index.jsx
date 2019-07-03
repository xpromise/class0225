import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import { increment, decrement } from '../../redux/action-creators';

export default class Counter extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired
  }

  state = {
    num: 0,
    value: 1
  };

  handleChange = (e) => {
    this.setState({
      value: +e.target.value
    })
  };

  increment = () => {
    this.props.store.dispatch(increment(this.state.value));
  };

  decrement = () => {
    this.props.store.dispatch(decrement(this.state.value));
  };

  incrementIfOdd = () => {
    const num = this.props.store.getState();

    if ((num & 1) === 1) {
      this.props.store.dispatch(increment(this.state.value));
    }
  };

  incrementAsync = () => {
    setTimeout(() => {
      this.props.store.dispatch(increment(this.state.value));
    }, 1000)
  };

  render() {
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