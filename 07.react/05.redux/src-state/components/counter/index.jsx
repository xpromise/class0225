import React, { Component, Fragment } from 'react';

export default class Counter extends Component {
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
    const { num, value } = this.state;
    this.setState({
      num: num + value
    })
  };

  decrement = () => {
    const { num, value } = this.state;
    this.setState({
      num: num - value
    })
  };

  incrementIfOdd = () => {
    const { num, value } = this.state;
    if ((num & 1) === 1) {
      this.setState({
        num: num + value
      })
    }
  };

  incrementAsync = () => {
    setTimeout(() => {
      const { num, value } = this.state;
      this.setState({
        num: num + value
      })
    }, 1000)
  };

  render() {
    return <Fragment>
      <h2>click {this.state.num} times</h2>
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