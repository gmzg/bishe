import React from 'react';
import { List, InputItem, TextareaItem, Toast } from 'antd-mobile';
import { createForm } from 'rc-form';
require ('./index.less');
class Online extends React.Component {
    state = {
        data:{
            name:null,
            position:null,
            momeny:null,
            positiondetail:null,
            positionneed:null,
            position:null,
            worker:null,
        },
        isPublish:false,
    }

    //TODO
    Publish = () =>{
        console.log(2)
        this.props.form.validateFields((err,values) =>{
            console.log(1)
            console.log(values)
        })
    }
    render() {
        const { data } = this.state;
        const { getFieldProps } = this.props.form;
        return (
            <div className='online-body'>
                <div className='online-title'>我是老板</div>
                <List>
                    <InputItem
                        {...getFieldProps('name')}
                        placeholder="请输入您的姓名"
                    >姓名</InputItem>
                    <InputItem
                        type="phone"
                        placeholder="请输入手机号"
                    >手机号码</InputItem>
                    <InputItem
                        placeholder="请输入您要发布的职位"
                        value={data.worker}
                    >职位</InputItem>
                    <InputItem
                        placeholder="请输入薪资"
                        value={data.momeny}
                    >薪资</InputItem>
                    <TextareaItem
                         title="职位描述"
                         placeholder="请输入职位描述"
                        value={data.positiondetail}
                    ></TextareaItem>
                    <TextareaItem
                        title="职位技能"
                        placeholder="请输入您的要求"
                        value={data.positionneed}
                    >职位技能</TextareaItem>
                    <InputItem
                        value={data.momeny}
                    >薪资</InputItem>
                    <InputItem
                        placeholder="请输入您所在的城市"
                        value={data.city}
                    >城市</InputItem>
                    <InputItem
                        placeholder="请输入您的具体地址"
                        value={data.position}
                    >详细地址</InputItem> 
                </List>
                <div className='publish' onClick={this.Publish}>发布</div>      
            </div>
        )
    }
}
export default createForm()(Online);