import React, { Component } from 'react';

import withHoc from '../with-hoc';

class Login extends Component {

  render() {
    const { handleChange, handleSubmit } = this.props;

    return <form onSubmit={handleSubmit}>
        用户名: <input type="text" onChange={handleChange('username')}/> <br/><br/>
        密码: <input type="password" onChange={handleChange('password')}/>  <br/><br/>
        <input type="submit" value="登录"/>
      </form>;
  }
}

export default withHoc('登录')(Login);