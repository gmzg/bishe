import React from 'react';
require('./index.less');
class Select extends React.Component {
    gohome = () =>{
        this.props.history.push('/home')
    }
    goonline = () =>{
        this.props.history.push('/online')
    }
    render() {
        return (
            <div className='select-body'>
              <div onClick={this.gohome}>我要找工作</div>
              <div onClick={this.goonline}>我要招聘</div>
            </div>
        )
    }
}
export default Select