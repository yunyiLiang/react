// 引入依赖
import React from 'react';
import {withRouter} from 'react-router-dom';
import { NavBar, Icon } from 'antd-mobile';
import { UserOutlined, HomeOutlined } from '@ant-design/icons';
import {withAuth, withUser} from '../../utils/hoc';



import 'antd-mobile/dist/antd-mobile.css';
import './style.scss';

import {connect} from 'react-redux';


const mapStateToProps = function(state){
    console.log('mapStateToProps.state=',state);
    return  state
    
}

const mapDispatchToProps = function(dispatch){
    return {
        dispatch,
        logout(){
            dispatch({type:'logout'})
        }
       
    }
}

let Mine = function(props){
    const{logout} = props;
   return(
      <div>
          <div className="Minetop">
               <NavBar
                  icon={<Icon type="left" onClick={() => props.history.push("/home")} />}
                  rightContent={[<HomeOutlined key="1" onClick={() => props.history.push("/home")} />]}
               >我的</NavBar>
            </div>
           我的
           <br/><br/><br/>

           <p className="logout" onClick={()=>{ logout();props.history.push('/home') }}>退出登录</p>
      </div>
   )
}

// 导出此组件
Mine = connect(mapStateToProps,mapDispatchToProps)(Mine)
Mine = withRouter(Mine);
// Mine = withAuth(Mine);

export default Mine;

