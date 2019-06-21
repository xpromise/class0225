import React, { Component } from 'react';
import { subscribe } from 'pubsub-js';

import CommentItem from '../comment-item';

import './index.css';

class CommentsList extends Component {

  // 初始化状态
  state = {
    comments: [
      {name: 'jack', content: 'i love rose', id: 1},
      {name: 'rose', content: 'i love peihua', id: 2}
    ]
  };

  delComment = (i) => {
    this.setState({
      comments: this.state.comments.filter((item, index) => i !== index)
    })
  }

  // 只执行一次，并且要在发布之前先执行。
  // 不会影响初始化渲染速度
  componentDidMount() {
    // 订阅消息
    subscribe('ADD_COMMENT', (msg, comment) => {
      // console.log(msg, comment);
      this.setState({
        comments: [comment, ...this.state.comments]
      })
    })
  }

  render() {
    // 接收props
    const { comments } = this.state;

    return (
      <div className="col-md-8">
        <h3 className="reply">评论回复：</h3>
        <h2 style={{display: comments.length ? 'none' : 'block'}}>暂无评论，点击左侧添加评论！！！</h2>
        <ul className="list-group">
          {
            comments.map((item, index) => {
              return <CommentItem comment={item} key={item.id} index={index} delComment={this.delComment}/>
            })
          }
        </ul>
      </div>
    )
  }
}

export default CommentsList;