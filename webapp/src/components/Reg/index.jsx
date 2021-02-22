// 引入依赖
import React from 'react';
import CryptoJS from 'crypto-js'
import { NavBar, Icon } from 'antd-mobile';
import { UserOutlined, HomeOutlined } from '@ant-design/icons';
import { Form, Input, Button, Checkbox, message } from 'antd';
import request from '../../utils/request';

import 'antd-mobile/dist/antd-mobile.css';
// import 'antd/dist/antd.css';
import './style.scss';


const rules ={
   username:[
       {required: true, message: '用户名和密码不能为空!'},
       {
           async validator(rule, value) {
               //用户名为空不发请求
               if(!value){
                   return
               }
               const {data} = await request.get('/user/checkname',{
                   params:{
                       name:value
                   }    
               });
               console.log(data,111);

               if (data.code) {
                 return Promise.resolve();
               }
               return Promise.reject('用户已存在');
             },

       }
   ],

  

   password:[
       {required: true, message: '密码不能为空!'},
       { min:2 ,max:10, message :'密码长度必须为6-12位字符'}
   ]
}



const Reg =function(props) {
  
      // phone.onblur = function(){
      //    const reg = /^[1][3578]\\d{9}$/;
      //    if(!reg.test(phone.value)){
      //       console.log(333);
      //       return
      //    }
      // }
      const onFinish =async (values) =>{
         console.log(values,333);
         const value={
            name:values.username,
            password:values.password
         }
         console.log(value,222222);
         value.password =CryptoJS.SHA256(values.password).toString();
         // console.log(values,1111111)
         const data =await request.post('/user/reg',value);
         // console.log(data,1111111)
         console.log(value,3333);

         
         if(data.code){
            //  message.success('注册成功')
            console.log('注册成功')
         }
 
         props.history.push({
             pathname:'login',
             state :{ username:value.name}
         })
     }

   

      return (
         <div className="reg">
            <div className="top">
               <NavBar
                  icon={<Icon type="left" onClick={() => props.history.push("/login")} />}
                  rightContent={[<HomeOutlined key="1" onClick={() => props.history.push("/home")} />]}
               >注册</NavBar>
            </div>
            {/* <Form
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            >
            <ul>
               <li>              
                <Form.Item
                  name="username"
                  rules={rules.username}
                  hasFeedback
                  >
                     <label>手 机</label>
                     <Form.Item
                     style={{display:'inline-block'}}
                     ><Input placeholder="请填写正确的手机号"/> 
                     </Form.Item>
                
               </Form.Item>                 
               </li>
               <li>
                  <Form.Item
                  name="password"
                  rules={rules.password}
                  >
                     <label>密 码</label>
                     <Form.Item
                     style={{display:'inline-block'}}
                     ><Input.Password placeholder="建议6-12位数字符号和字母的组合"/>
                     </Form.Item> 
                
                  </Form.Item>
               </li>
            </ul>
            <div id="btn" > 
               <Form.Item  >
                  <Button type="primary" htmlType="submit"
                  style={{background:'transparent',border:'0',color:'#fff'}}
                  >
                  注册
                  </Button>
               </Form.Item>
            </div>
            </Form> */}


            <Form
            
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            // onFinishFailed={onFinishFailed}
            >
            <Form.Item
               className="regForm"
                name="username"
                rules={rules.username}
                // hasFeedback 校验成功失败 提示框 不用再另外设置东西
                hasFeedback
               //  style={{padding:'10px'}}
            >
                <Input
                style={{display:'inline-block'}}
                placeholder='用户名'
                />
            </Form.Item>

            <Form.Item
               className="regForm"
                name="password"
                rules={rules.password}
                
            >
                <Input.Password
               //  style={{display:'inline-block'}}
                placeholder='密码'
            
                />
            </Form.Item>


            <Form.Item style={{padding:'10px 15px'}} 
            >
                <Button type="primary" htmlType="submit" className='btn'
                  style={{background:'transparent',
                  border:'0',
                  color:'#fff',
                  background:'#4fc25e',
                  width:'100%',
                  height:'50px',
                  fontSize:'18px',
                  borderRadius:'5px'
               }}
                
                >
                注册
                </Button>
            </Form.Item>
        </Form>



            <div className="log" style={{margin:'10px'}}>
               已有账号,
               <div className="login" onClick={() => {props.history.push('/login')}}>立即登录</div>
            </div>
            
            <div className='auth-reg'>
               <h2><span>合作网站账号登录</span></h2>

            </div>
            <div className='auth-btn'>
               <p>
                  <img src="https://s.zhulang.com/wap/pub/v2/style/img/auth-qq.png" alt="" />
                  <img src="https://s.zhulang.com/wap/pub/v2/style/img/auth-wb.png" alt="" />
               </p>
            </div>
         </div>
      )
   
}

// 导出此组件
export default Reg;
