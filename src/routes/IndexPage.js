import React, {Fragment} from 'react';
import { connect } from 'dva';
// import styles from './IndexPage.css';
import {Button} from 'antd-mobile';

class Login extends  React.Component {
  render () {
    return (
      <Fragment>
        <div>校园兼职</div>
        <Button>测试</Button>
      </Fragment>
    )  
  }
}

export default connect()(Login);
