import React from 'react';
import { Icon } from 'antd-mobile';
require('./index.less');
class Detail extends React.Component {
    goBack = () =>{
        // console.log(this.props.history,"lll")
        this.props.history.goBack()
    }
    render() {
        return (
            <div style={{height:"100%",padding:'0 10px',background:'#eefbf9'}}>
                <div className='detail-top'>
                  <Icon type='left' size='lg' color="#ccc"onClick={this.goBack}></Icon>
                </div>
                <div style={{paddingLeft:10}}>
                    <div className='detail-title'>
                    <span style={{fontSize:'30px',fontWeight:'bold'}}>JAVA</span>
                    <span style={{color:'white'}}>69/天</span>
                    </div>
                    <div className='need'>
                        <em>安阳</em>
                        <em>经验不限</em>
                        <em>学历不限 </em>
                    </div>
                    <div className='detail-leader'>
                        <img />
                        <div>
                            <div>李晨</div>
                            <div>行政</div>
                        </div>
                    </div>
                    <div className='position-detail'>
                        <h3>职位详情</h3>
                        <div>
                            需要辅导小学四年级的学生，辅导功课位数学、英语，每天六点到八点，可以负责接送辅导老师，辅导时间比较灵活，可以商量。
                        </div>
                    </div>
                    <div className='position-need'>
                        <h3>技能要求</h3>
                        <div>
                            英语过四级，有过辅导经验者优先
                        </div>
                    </div>
                    <div className='work-position'>
                        <h3>工作地点</h3>
                        <div>
                            安阳市文峰区歪脖子巷甲三号
                        </div>
                    </div>
                    <div style={{color:'white',background:'#62d5c8',height:56,lineHeight:'56px',textAlign:'center',fontSize:'20px',marginTop:'94px'}}>联系方式：12345678901</div>
                </div>
            </div>
        )
    }
}
export default Detail