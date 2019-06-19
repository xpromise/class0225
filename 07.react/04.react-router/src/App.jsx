import React, { Component } from 'react';
import { Link, NavLink, Route, Redirect, Switch } from 'react-router-dom';

import Home from './components/home';
import About from './components/about';

import './App.css';

export default class App extends Component {
  render() {
    return (
      <div>

        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header">
              <h2>React Router Demo</h2>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {/*
                Link 用来修改网址，同时添加了浏览历史记录  history.push('/xxx')
                NavLink 比Link多一个选中的class，默认是active
                Route 用来根据网址/路径来加载组件（一旦路径匹配上就加载组件，没有匹配上就不加载）
                Redirect 一旦组件被加载，就修改网址，同时添加了浏览历史记录（一旦路由没有匹配上，就会重定向） 通常放最后
                Switch 切换。 里面的组件有且只有一个生效（从上到下依次匹配）

                两种方式更改浏览器历史记录和网址
                  Link / NavLink  路由导航链接
                  this.props.history.goBack() 编程式导航
              */}
              <NavLink className="list-group-item" activeClassName="my-active" to="/about">About</NavLink>
              <NavLink className="list-group-item" activeClassName="my-active" to="/home">Home</NavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                <Switch>
                  <Route path="/about" component={About} />
                  <Route path="/home" component={Home} />
                  <Redirect to="/about"/>
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}