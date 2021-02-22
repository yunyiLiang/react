// 引入依赖
import React from 'react';
import {render} from 'react-dom';
import {HashRouter,BrowserRouter,Route} from 'react-router-dom';

import store from '../src/store';
import {Provider} from 'react-redux'


// 引入组件
import App from './App';
import './assets/sass/public/vw.scss';
import './assets/sass/public/common.scss';

// 根据环境不同切换不同的路由
const Router = process.env.NODE_ENV === 'development' ? HashRouter : BrowserRouter;

// 渲染节点或组件
render(
   <Provider store ={store}>
      <HashRouter>
         <Route component={App} />
      </HashRouter>
   </Provider>,
   
   document.querySelector('#app')
)
