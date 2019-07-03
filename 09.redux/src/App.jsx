import React, { Component } from 'react';

import Counter from './components/counter';
import store from './redux/store';

export default class App extends Component {
  render() {
    return <Counter store={store}/>;
  }
}