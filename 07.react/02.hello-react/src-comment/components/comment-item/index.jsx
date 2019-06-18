import React, { Component } from 'react';
import PropTypes from 'prop-types';
// 为了让webpack打包样式资源
import './index.css';

class CommentItem extends Component {
  static propTypes = {
    comment: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired
  }

  delComment = () => {
    // 获取要删除评论的下标
    const { index, comment : { name }} = this.props;
    // 未定义的变量不能使用
    if (window.confirm(`你确认要删除${name}的评论吗?`)) {
      // 删除评论
      this.props.delComment(index);
    }
  }

  render() {
    const { name, content } = this.props.comment;

    return (
      <li className="list-group-item">
        <div className="handle">
          <button className="del-btn" onClick={this.delComment}>删除</button>
        </div>
        <p className="user"><span>{name}</span><span>说:</span></p>
        <p className="centence">{content}</p>
      </li>
    )
  }
}

export default CommentItem;