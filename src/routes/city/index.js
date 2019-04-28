import React, { Fragment } from 'react';
import { connect } from 'dva';
import { Icon } from 'antd-mobile';
require ('./index.less');
class City extends React.Component {

    componentDidMount() {
        // console.log(1)
        this.props.dispatch({
            type:'city/getcities',
          });
    };


    goBack = () =>{
        // console.log(this.props.history,"lll")
        this.props.history.goBack()
    }
    render()  {
        const { cities } = this.props;
        console.log(cities,222)
        return (
            <div className='city-body'>
                <div className='city-top'>
                  <Icon type='left' size='lg' color="#ccc"onClick={this.goBack}></Icon>
                </div>
                <div style={{paddingLeft:10}}>
                    <div className='hot-title'>热门城市</div>
                    <div className='hot-cities'>
                    {
                        cities.data&&cities.data.hotCities&&cities.data.hotCities.map((item,index) => {
                            return (
                                <span key={index}>{item.name}</span>
                            )
                        })
                    }
                    </div>
                    {
                        cities.data&&cities.data.cities&&Object.keys(cities.data.cities).map((item,index) =>{
                            return(
                                <Fragment>
                                    <div className='city-start' key={index}>{item}</div>
                                    {
                                    cities.data.cities[item].map((item,index) =>{
                                        return(
                                            <div className='city' key={item.id}>{item.name}</div>    
                                        )
                                    })   
                                    }
                                </Fragment>
                            )
                        }) 
                    }
                    {/* <div className='city-start'>A</div>
                    <div className='city'>阿坝</div> */}
                </div>
                
            </div>
        )
    }
}
function mapStateToProps({city}) {
    return { 
        cities:city.cities
     };
  }
export default connect(mapStateToProps)(City);