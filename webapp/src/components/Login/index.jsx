// 引入依赖
import React from 'react';
import SHA256 from 'crypto-js/sha256';
import { NavBar, Icon } from 'antd-mobile';
import { UserOutlined,HomeOutlined,LockOutlined} from '@ant-design/icons';
import { Form, Input, Button, Checkbox, message } from 'antd';
import request from '../../utils/request';

import store from '../../store';

import 'antd-mobile/dist/antd-mobile.css';
import './style.scss';



const rules={
   username:[
      {required: true, message: '用户名不能为空!'},
      // console.log(this,2222222)
   ],
   password:[
      {required: true, message: '密码不能为空!'},
    
  ]
 
   
}


// console.log(mistaken)

const Login = function (props) {

   const onFinish =async (values) =>{
      //   let {username,password,remember} =values;
      const value={
         name:values.username,
         password:values.password
      }
      console.log(222)

     value.password =SHA256(values.password).toString();

        // console.log(password);
        const {data} =await request.get('/user/login',{
           params:{
              name:value.name,
              password:value.password
           }
        });
        console.log(data,1111111)

        if (data.code) {
         const action ={type:'login',user:data}
            store.dispatch(action);
            console.log(data,66666666666)
            console.log('newdata',store.getState())

            // 登录成功带回原来的地址 如果没有,就回到主页
           const {search} =props.location;
           const pathname =search.match(/targetUrl\=([\/\w\-]+)/)
           let targetUrl;
           if(pathname){
               targetUrl = pathname[1]
           }
           console.log('targetUrl',targetUrl)
           props.history.push({
               pathname:targetUrl || '/home'
           })

         return Promise.resolve();


       }else{         
          const mistaken=document.getElementsByClassName('mistaken')[0];
          mistaken.className='loginActive';
          setTimeout(()=>{
          mistaken.className='mistaken';   
         },3000)
       }
       
      }

   return (
      <div>
         <NavBar
            // mode="dark"
            icon={<Icon type="left" />}
            rightContent={[
               <HomeOutlined key="1" onClick={()=>{props.history.push('/home')}} />
            ]}
         >登录逐浪网</NavBar>

         <div className='login'>
            <Form
            className="loginForm"
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish} 
            >
            <ul>
               <li><i><UserOutlined /></i>
                  <Form.Item
                  name="username"
                  rules={rules.username}
                  hasFeedback
                  ><Input placeholder='请输入用户名' /></Form.Item>
               {/* <input type="text" placeholder='用户名/手机号'/> */}
               
               </li>
               <li><i><LockOutlined /></i>
                  <Form.Item
                  name="password"
                  rules={rules.password}
                  hasFeedback
                  ><Input.Password placeholder='请输入密码' /></Form.Item>
                  {/* <input type="password" placeholder='请输入密码'/> */}
               </li>
            </ul>
            <b className='mistaken' 
            style={{color:'red'}}>用户名或密码错误</b>

            <div className='loginBtn'><span>
               <Form.Item>
                  <Button type="primary" htmlType="submit"
                  style={{background:'transparent',
                  border:'0',
                  color:'#fff',
               }} >登录
                  </Button>
               </Form.Item>
               </span></div>
            </Form>

            <b className='auth'><i onClick={()=>{props.history.push('/reg')}}>立即注册</i><i>忘记密码</i></b>
         </div>
         
         <div className='auth-log'>
            <h2><span>合作网站账号登录</span></h2>

         </div>
         <div className='auth-btn'>
            <p>
               <img src="https://s.zhulang.com/wap/pub/v2/style/img/auth-qq.png" alt=""/>
               <img src="https://s.zhulang.com/wap/pub/v2/style/img/auth-wb.png" alt=""/>
               </p>
         </div>
      </div>
   )
}

// 导出此组件
export default Login;