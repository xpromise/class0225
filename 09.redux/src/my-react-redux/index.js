/*
  react-redux向外暴露
    Provider 1. 更新组件  2. 哪个容器组件需要使用store对象，帮你传进去（使用context传递数据）
    connect 包装UI组件，生成容器组件。 由容器组件给UI组件传递状态数据和操作状态数据的方法
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// 创建context
const Context = React.createContext();

export class Provider extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired
  };

  render() {
    return <Context.Provider value={this.props.store}>
      {
        // Provider标签包含的内容
        this.props.children
      }
    </Context.Provider>;
  }
}

export function connect(mapStateToProps, mapDispatchToProps) {
  // connect方法调用第一次，返回值是一个高阶组件
  return function (UIComponent) {

    // 高阶组件调用返回一个新组件（容器组件），容器组件包装UI组件
    return class extends Component {
      /*state = {
        store: {}
      };*/

      isFirst = true;

      render() {
        return <Context.Consumer>
          {
            (store) => {
              // 得到store对象

              // 得到要遍历展示在UI组件的state对象
              const stateProps = mapStateToProps(store.getState());

              if (this.isFirst) {
                // 得到要遍历展示在UI组件的操作state的方法
                const type = typeof mapDispatchToProps;

                if (type === 'function') {
                  this.dispatchProps = mapDispatchToProps(store.dispatch);
                } else if (type === 'object') {
                  /*
                    {
                      increment: (data) => action ,
                      decrement: (data) => action
                     }

                     -->

                     {
                      increment(data) {
                        dispatch(increment(data))
                      },
                      decrement(data) {
                        dispatch(decrement(data))
                      }
                     }
                   */
                  this.dispatchProps = Object.keys(mapDispatchToProps).reduce((prev, key) => {
                    prev[key] = function (data) { store.dispatch(mapDispatchToProps[key](data)) };
                    return prev;
                  }, {})
                } else {
                  this.dispatchProps = {};
                }

                // 重新渲染组件
                store.subscribe(() => {
                  this.setState({
                    // store: store.getState()
                  });
                });

                this.isFirst = false;
              }

              return <UIComponent {...stateProps} {...this.dispatchProps}/>
            }
          }
        </Context.Consumer>
      }
    }
  }
}