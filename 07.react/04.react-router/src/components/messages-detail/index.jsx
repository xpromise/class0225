import React, { Component } from 'react';

export default class MessagesDetail extends Component {
  state = {
    messagesDetail: [
      {id: 1, title: 'messages001', content: 'messages001 content'},
      {id: 3, title: 'messages003', content: 'messages003 content'},
      {id: 6, title: 'messages006', content: 'messages006 content'},
    ]
  }

  render() {
    // 获取：id参数
    const { id } = this.props.match.params;

    console.log(id); // string --> number

    const result = this.state.messagesDetail.find((item) => item.id === +id);

    console.log(result);


    return <ul>
      <li>id: {result.id}</li>
      <li>title: {result.title}</li>
      <li>content: {result.content}</li>
    </ul>;
  }
}