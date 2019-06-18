import React, { Component } from 'react';

import Search from './components/search';
import List from './components/list';

class App extends Component {
  state = {
    searchName: ''
  }

  updateSearchName = (searchName) => {
    this.setState({
      searchName
    })
  }

  render() {
    return (
      <div className="container">
        <Search updateSearchName={this.updateSearchName}/>
        <List searchName={this.state.searchName}/>
      </div>
    )
  }
}

export default App;