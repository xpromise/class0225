import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Search extends Component {
  static propTypes = {
    updateSearchName: PropTypes.func.isRequired
  }

  state = {
    searchName: ''
  }

  updateSearchName = (e) => {
    this.setState({
      searchName: e.target.value
    })
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return this.state.searchName !== nextState.searchName;
  }

  search = () => {
    this.props.updateSearchName(this.state.searchName);
  }

  render() {
    console.log('render');
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input type="text" placeholder="enter the name you search" onChange={this.updateSearchName}/>
          <button onClick={this.search}>Search</button>
        </div>
      </section>
    )
  }
}