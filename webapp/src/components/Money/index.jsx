// 引入依赖
import React from 'react';
import { NavBar, Icon } from 'antd-mobile';
import { UserOutlined, HomeOutlined } from '@ant-design/icons';
import {withAuth, withUser} from '../../utils/hoc';



import 'antd-mobile/dist/antd-mobile.css';
import './style.scss'


let Money = function(props){
   return(
      <div>
          <div className="Montop">
               <NavBar
                  icon={<Icon type="left" onClick={() => props.history.push("/home")} />}
                  rightContent={[<HomeOutlined key="1" onClick={() => props.history.push("/home")} />]}
               >充值</NavBar>
            </div>
           充值
      </div>
   )
}

// 导出此组件
Money = withAuth(Money);

export default Money;

