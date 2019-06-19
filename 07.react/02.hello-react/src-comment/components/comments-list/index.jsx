import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CommentItem from '../comment-item';

import './index.css';

class CommentsList extends Component {
  static propTypes = {
    comments: PropTypes.array.isRequired,
    delComment: PropTypes.func.isRequired
  }

  render() {
    // 接收props
    const { comments, delComment } = this.props;

    return (
      <div className="col-md-8">
        <h3 className="reply">评论回复：</h3>
        <h2 style={{display: comments.length ? 'none' : 'block'}}>暂无评论，点击左侧添加评论！！！</h2>
        <ul className="list-group">
          {
            comments.map((item, index) => {
              return <CommentItem comment={item} key={item.id} index={index} delComment={delComment}/>
            })
          }
        </ul>
      </div>
    )
  }
}

export default CommentsList;