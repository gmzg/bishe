import React, {Fragment} from 'react';
// import { connect } from 'dva';
import {Button} from 'antd-mobile';
import { List, InputItem, Toast } from 'antd-mobile';
import { createForm } from 'rc-form';
import styles from "./signin.less";
require('./signin.less');
class Login extends  React.Component {
  state = {
    hasError: false,
    passwordvalue: '',
    phonevalue:'',
  }
  onErrorClick = () => {
    if (this.state.hasError) {
      Toast.info('请输入11位号码');
    }
  }
  onChange = (value) => {
    console.log(value,2)
    this.setState({
      value
    })
  }
  onChangePhone = (value) => {
    console.log(value,1)
    if (value.replace(/\s/g, '').length < 11) {
      this.setState({
        hasError: true,
      });
    } else {
      this.setState({
        hasError: false,
      });
    }
    this.setState({
      phonevalue:value,
    });
  }
  goHome = () => {
    this.props.history.push('/home')
  }
  render () {
    // const { getFieldProps } = this.props.form;
    const { passwordvalue, phonevalue} = this.state;
    return (
      <Fragment>
        <div className={styles.header}>校园兼职</div>
        <List className='form'>
          <InputItem
              type="phone"
              placeholder="请输入手机号"
              error={this.state.hasError}
              onErrorClick={this.onErrorClick}
              onChange={this.onChangePhone}
              value={phonevalue}
            >手机号码</InputItem>
            <InputItem
              // {...getFieldProps('password')}
              type="password"
              placeholder="请输入密码"
              onChange={this.onChange}
              value={passwordvalue}
            >设置密码</InputItem>  
        </List>
        <Button 
          style={{background:"#5dd5c8",color:'white',height:42,borderRadius:0,margin:'0 20px'}}
          onClick={this.goHome}
        >登录</Button>
      </Fragment>
    )  
  }
}

export default  createForm()(Login);
