import React, { Component } from 'react';
/*
  高阶组件：
    1. 是什么？ 本质上是一个函数。函数接收组件作为参数，返回值是一个新组件
    2. 作用：用来复用组件代码
 */
export default function (name) {
  return function withHoc(ComponentWrapped) {
    return class extends Component {
      // 修改组件的名称, 方便在开发者工具中调试
      static displayName = `Form(${getComponentName(ComponentWrapped)})`

      state = {
        username: '',
        password: ''
      }

      handleChange = (stateName) => {
        return (e) => {
          this.setState({
            [stateName]: e.target.value
          })
        }
      }

      handleSubmit = (e) => {
        e.preventDefault();
        const { username, password, phone } = this.state;

        if (phone) {
          alert(`您的用户名是：${username}  您的密码是：${password} 您的手机号是：${phone}`);
        } else {
          alert(`您的用户名是：${username}  您的密码是：${password}`);
        }

      }

      render() {
        const mapMethodToProps = {
          handleSubmit: this.handleSubmit,
          handleChange: this.handleChange
        };

        return <div>
          <h2>{name}</h2>
          <ComponentWrapped {...mapMethodToProps}/>
        </div>
      }
    }
  }
}

function getComponentName(component) {
  return component.displayName || component.name || 'Component';
}