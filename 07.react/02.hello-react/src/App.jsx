/*
  应用主组件
 */
// 组件/模块中需要使用的内容，都需要引入
import React from 'react';

// 引入其他组件
import AddComment from './components/add-comment';
import CommentsList from './components/comments-list';

class App extends React.Component {
  // 初始化状态
  state = {
    comments: [
      {name: 'jack', content: 'i love rose'},
      {name: 'rose', content: 'i love peihua'}
    ]
  };

  render() {
    // 获取状态值
    const { comments } = this.state;

    return (
      <div>
        <header className="site-header jumbotron">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <h1>请发表对React的评论</h1>
              </div>
            </div>
          </div>
        </header>
        <div className="container">
          <AddComment />
          <CommentsList comments={comments} />
        </div>
      </div>
    );
  }
}

// 暴露出去
export default App;