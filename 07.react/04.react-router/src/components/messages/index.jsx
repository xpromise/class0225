import React, { Component } from 'react';

import { Link } from 'react-router-dom';

export default class Messages extends Component {
  state = {
    messagesArr: []
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        messagesArr: [
          {id: 1, content: 'message001'},
          {id: 3, content: 'message003'},
          {id: 6, content: 'message006'},
        ]
      })
    }, 1000)
  }

  render() {
    return <ul>
      {
        this.state.messagesArr.map((item, index) => {
          return <li key={index}>
            <Link to={`/home/messages/${item.id}`}>{item.content}</Link>
          </li>
        })
      }
    </ul>;
  }
}