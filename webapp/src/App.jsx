// 引入依赖
import React from 'react';
import { BrowserRouter, Route, Switch, Redirect, Link } from 'react-router-dom';

// 引入子组件
import Reg from './components/Reg';
import Login from './components/Login';
import Home from './components/Home';
import BookShelf from './components/Bookshelf';
import Money from './components/Money';
import Boy from './components/Boy';
import Girls from './components/Girls';
import Client from './components/Client';
import Bookdetalis from './components/Bookdetalis';
import Mine from './components/Mine';

import './assets/sass/public/vw.scss';
import './assets/sass/public/common.scss';

let App = (props) => {
   const menu = [
      {
         id: 1,
         title: '首页',
         path: '/home',
         name: 'home',
         component: Home,
      },
      {
         id: 2,
         title: '书架',
         path: '/bookShelf',
         name: 'bookShelf',
         component: BookShelf,
      },
      {
         id: 3,
         title: '充值',
         path: '/money',
         name: 'money',
         component: Money,
      },
      {
         id: 4,
         title: '男生',
         path: '/boy',
         name: 'boy',
         component: Boy,
      },
      {
         id: 5,
         title: '女生',
         path: '/girls',
         name: 'girls',
         component: Girls,
      },
      {
         id: 6,
         title: '客户端',
         path: '/client',
         name: 'client',
         component: Client,
      },
      {
         id: 7,
         title: '书籍详情',
         path: '/bookdetalis',
         name: 'bookdetalis',
         component: Bookdetalis,
      },
      {
         id: 8,
         title: '我的',
         path: '/mine',
         name: 'mine',
         component: Mine,
      },
   ];

   return (
      <div>
         {/* 渲染子路由组件页面 */}
         <Switch>
            {
               menu.map(item => <Route key={item.id} path={item.path} component={item.component} />)
            }
            <Route path='/Reg' component={Reg} />
            <Route path='/login' component={Login} />
            <Route path='/bookdetalis' component={Bookdetalis} />
            <Route path='/notfound' render={() => <div>404页面</div>} />
            <Redirect from='/' to='/home' exact />
            <Redirect to='/notfound' />
         </Switch>
      </div>
   )
};

// 导出此组件
export default App;