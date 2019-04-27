import React from 'react';
import { SearchBar, Flex } from 'antd-mobile';
require('./index.less');
// const PlaceHolder = ({ className = '', ...restProps }) => (
//     <div className={`${className} placeholder`} {...restProps}>Block</div>
//   );
class Home extends React.Component {
    render() {
        return (
            <div style={{background:'white',height:'100%'}}>

                <div className='home-top'>
                <div style={{color:'white',fontSize:'35px',textAlign:'center'}}>上校园兼职找工作</div>
                <SearchBar
                    placeholder="搜索职位"
                ></SearchBar>
                </div>

                <div className="home-body">
                    <div className="body-scroll">
                    <div className="sub-title">技术</div>
                        <Flex wrap="wrap">
                            <div className="Java">Java</div>
                            <div className="Java">PHP</div>
                            <div className="Java">Web前端</div>
                            <div className="Java">数据挖掘</div>
                            <div className="Java">C++</div>
                            <div className="Java">Python</div>
                            <div className="Java">Android</div>
                            <div className="Java">iOS</div>
                        </Flex>
                    <div className="sub-title">技术</div>
                        <Flex wrap="wrap">
                            <div className="Java">Java</div>
                            <div className="Java">PHP</div>
                            <div className="Java">Web前端</div>
                            <div className="Java">数据挖掘</div>
                            <div className="Java">C++</div>
                            <div className="Java">Python</div>
                            <div className="Java">Android</div>
                            <div className="Java">iOS</div>
                        </Flex>
                        <div className="sub-title">技术</div>
                        <Flex wrap="wrap">
                            <div className="Java">Java</div>
                            <div className="Java">PHP</div>
                            <div className="Java">Web前端</div>
                            <div className="Java">数据挖掘</div>
                            <div className="Java">C++</div>
                            <div className="Java">Python</div>
                            <div className="Java">Android</div>
                            <div className="Java">iOS</div>
                        </Flex>
                    </div>
                </div>
            </div>
        )
    }
}
export default Home