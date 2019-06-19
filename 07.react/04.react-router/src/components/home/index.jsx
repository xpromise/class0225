import React, { Component } from 'react';

import { NavLink, Route, Redirect, Switch } from 'react-router-dom';

import News from '../news';
import Messages from '../messages';

export default class Home extends Component {
  render() {
    return <div>
      <h2>Home组件</h2>
      <ul className="nav nav-tabs">
        <li>
          <NavLink className="list-group-item" activeClassName="my-active" to="/home/news">news</NavLink>
        </li>
        <li>
          <NavLink className="list-group-item" activeClassName="my-active" to="/home/messages">messages</NavLink>
        </li>
      </ul>
      <Switch>
        <Route path="/home/news" component={News}/>
        <Route path="/home/messages" component={Messages}/>
        <Redirect to="/home/news"/>
      </Switch>
    </div>;
  }
}