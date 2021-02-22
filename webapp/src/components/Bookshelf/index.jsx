// 引入依赖
import React from 'react';
import { NavBar, Icon } from 'antd-mobile';
import { UserOutlined, HomeOutlined } from '@ant-design/icons';
import {withAuth, withUser} from '../../utils/hoc';



import 'antd-mobile/dist/antd-mobile.css';
import './style.scss'


let BookShelf = function(props){
   return(
      <div>
          <div className="BStop">
               <NavBar
                  icon={<Icon type="left" onClick={() => props.history.push("/home")} />}
                  rightContent={[<HomeOutlined key="1" onClick={() => props.history.push("/home")} />]}
               >书架</NavBar>
            </div>
           book
      </div>
   )
}

// 导出此组件
BookShelf = withAuth(BookShelf);

export default BookShelf;