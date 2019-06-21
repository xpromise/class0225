import React, { Component } from 'react';

import withHoc from '../with-hoc';

class Register extends Component {

  render() {
    const { handleChange, handleSubmit } = this.props;

    return <form onSubmit={handleSubmit}>
        用户名: <input type="text" onChange={handleChange('username')}/> <br/><br/>
        密码: <input type="password" onChange={handleChange('password')}/>  <br/><br/>
        手机号: <input type="text" onChange={handleChange('phone')}/>  <br/><br/>
        <input type="submit" value="注册"/>
      </form>;
  }
}

export default withHoc('注册')(Register);