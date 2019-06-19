/*
  添加评论组件
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddComment extends Component {
  static propTypes = {
    updateComment: PropTypes.func.isRequired
  }

  state = {
    name: '',
    content: '',
  }

  id = 2

  handleChange = (stateName) => {
    return (e) => {
      this.setState({
        [stateName]: e.target.value
      })
    }
  }

  addComment = (e) => {
    e.preventDefault();

    // 收集表单数据
    const { name, content } = this.state;

    if (!name || !content) return alert('输出的内容不能为空~');

    this.props.updateComment({name, content, id: ++this.id});

    // 清空数据
    this.setState({
      name: '',
      content: ''
    })
  }

  render() {
    console.log('render()');

    const { name, content } = this.state;
    return (
      <div className="col-md-4">
        <form className="form-horizontal" onSubmit={this.addComment}>
          <div className="form-group">
            <label>用户名</label>
            <input type="text" className="form-control" placeholder="用户名" onChange={this.handleChange('name')} value={name}/>
          </div>
          <div className="form-group">
            <label>评论内容</label>
            <textarea
              className="form-control"
              rows="6"
              placeholder="评论内容"
              onChange={this.handleChange('content')}
              value={content}
            />
          </div>
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <button type="submit" className="btn btn-default pull-right">提交</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default AddComment;