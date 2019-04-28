import React from 'react';
import { Icon } from 'antd-mobile';
require ('./index.less');
class ListPage extends React.Component {
    state = {
        icontype:4,
        listfilter:false,
    }
    iconChange = (index) => {
        console.log(index)
        const { icontype, listfilter } = this.state;
        if(Number(icontype)===Number(index)) {
            this.setState({
                icontype:4,
                listfilter:false
            })
        }else {
            this.setState({
                icontype:index,
                listfilter:true
            })
        }
    }
    goDetail = () => {
        this.props.history.push('/detail')
    }

    goback = () => {
        this.props.history.goBack();
    }

    gocity = () => {
        this.props.history.push('/city')
    }
    render (){
        const filterList=['经验','学历','薪资'] 
        const { icontype, listfilter } = this.state;
        return (
            <div style={{height:'100%'}}>
                <div className='list-top'>
                   <img alt='首页' onClick={this.goback}src="https://static.zhipin.com/zhipin/v151/h5/wap/images/icon-home.png" style={{width:18,height:18}}/>
                   <div className='list-search-box'>
                       <div className='city' onClick={this.gocity}>北京</div>
                       <input type="text" defaultValue="java" className='list-search'></input>    
                   </div>
                   <div style={{color:'#5dd5ca',fontSize:15}}>搜索</div>
                </div>
                <div className='filter-bar'>
                {
                    filterList.map((item,index) =>{
                    return (
                        <div key={index} onTouchStart={(e) =>this.iconChange(index,e)}>
                            <span className='filter' >{item}</span>
                            <Icon type={Number(icontype)===Number(index)?'up':'down'} size='xxs'></Icon>
                        </div>
                    )
                })
                }
                </div>
                {
                    listfilter?
               (<ul className='filter-list'>
                    <li>不限</li>
                    <li>大一</li>
                    <li>大二</li>
                    <li>大三</li>
                    <li>大四</li>
                </ul>):<div></div>
                }
                <div className='list-body'>
                  <div className='list-item' onClick={this.goDetail}>
                    <img style={{background:'red',width:59,height:59}} alt="logo" />
                    <div className='list-detaile'>
                        <div>JAVA</div>
                        <div>软通动力</div>
                        <div>
                            <em>北京</em> <em>大一</em> <em>本科</em>
                        </div>
                    </div>
                    <div style={{color:'red',fontSize:'25px'}}>69/天</div>
                  </div>
                </div>
            </div>
        )
    }
} 
export default ListPage