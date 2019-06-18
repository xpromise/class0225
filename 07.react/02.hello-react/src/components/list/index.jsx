import React, { Component } from 'react';
import PropTypes from 'prop-types';

import axios from 'axios';

export default class List extends Component {
  static propTypes = {
    searchName: PropTypes.string.isRequired
  }

  state = {
    firstView: true,  // 初始化渲染
    isLoading: false, // loading
    success: null, // 请求成功
    error: null // 请求失败
  }

  componentWillReceiveProps(nextProps, nextState) {
    // 将状态更新为loading，让页面显示loading
    this.setState({
      firstView: false,
      isLoading: true
    })
    console.log(nextProps);
    // 发送请求
    axios.get(`https://api.github.com/search/users?q=${nextProps.searchName}`)
      .then((response) => {
        // 将状态更新成成功的状态
        this.setState({
          isLoading: false,
          success: response.data.items.map((item) => ({name: item.login, url: item.html_url, image: item.avatar_url}))
        })
      })
      .catch((error) => {
        // 将状态更新成失败的状态
        this.setState({
          isLoading: false,
          success: null,
          error: '网络出现异常，请刷新试试~'
        })
      })
  }


  render() {
    const { firstView, isLoading, success, error } = this.state;

    if (firstView) {
      return <h2>enter name to search</h2>;
    } else if (isLoading) {
      return <h2>loading....</h2>;
    } else if (success) {
      return (
        <div className="row">
          {
            success.map((item, index) => {
              return (
                <div className="card" key={index}>
                  <a href={item.url} target="_blank">
                    <img src={item.image} style={{width: '100px'}}/>
                  </a>
                  <p className="card-text">{item.name}</p>
                </div>
              )
            })
          }
        </div>
      )
    } else {
      // 在React中不能直接展示对象，所以error要设置成字符串
      return <h2>{error}</h2>;
    }

  }
}