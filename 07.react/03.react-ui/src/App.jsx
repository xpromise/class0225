import React, { Component } from 'react';

import { Button, message, Carousel } from 'antd';

import './App.css';

export default class App extends Component {

  handleClick = () => {
    message.success('这是成功的提示~', 5);
  }

  render() {
    return <div>
      <Carousel autoplay>
        <div className="box">
          <h3>1</h3>
        </div>
        <div className="box">
          <h3>2</h3>
        </div>
        <div className="box">
          <h3>3</h3>
        </div>
        <div className="box">
          <h3>4</h3>
        </div>
      </Carousel>
      <Button type="primary" onClick={this.handleClick}>按钮</Button>
      <Button type="danger">按钮</Button>
    </div>;
  }
}