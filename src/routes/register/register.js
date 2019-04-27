import React, {Fragment} from 'react';
// import { connect } from 'dva';
import {Button} from 'antd-mobile';
import { List, InputItem, Toast } from 'antd-mobile';
import { createForm } from 'rc-form';
import styles from "./register.less";
require('./register.less');
class Register extends  React.Component {
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
  goSign = () => {
    this.props.history.push('/signin')
  }
  render () {
    // const { getFieldProps } = this.props.form;
    const { passwordvalue, phonevalue} = this.state;
    return (
      <Fragment>
        <div style={{background:'white',height:'100%'}}>
            <div className={styles.header}>校园兼职
            <span 
            style={{color:'red',position:'absolute',right:0,top:-20,fontSize:14}}
            onClick={this.goSign}
            >立即登录</span>
            </div>
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
                  placeholder="请设置密码"
                  onChange={this.onChange}
                  value={passwordvalue}
                >设置密码</InputItem>  
            </List>
            <Button 
              style={{background:"#5dd5c8",color:'white',height:42,borderRadius:0,margin:'90px 20px 0'}}
              onClick={this.goSign}
            >注册</Button>
        </div>
      </Fragment>
    )  
  }
}

export default  createForm()(Register);
