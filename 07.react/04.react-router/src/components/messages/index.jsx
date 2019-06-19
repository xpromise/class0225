import React, { Component } from 'react';

import { Link, Route } from 'react-router-dom';

import MessagesDetail from '../messages-detail';

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

  goForward = () => {
    this.props.history.goForward();
  }

  goBack = () => {
    this.props.history.goBack();
  }

  render() {
    return <div>
      <ul>
        {
          this.state.messagesArr.map((item, index) => {
            return <li key={index}>
              <Link to={`/home/messages/${item.id}`}>{item.content}</Link>
              <button onClick={this.goForward}>前进</button>
              <button onClick={this.goBack}>后退</button>
            </li>
          })
        }
      </ul>
      <Route path="/home/messages/:id" component={MessagesDetail}/>
    </div>;
  }
}