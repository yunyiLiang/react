// 引入依赖
import React from 'react';
import {withRouter} from 'react-router-dom';
import { NavBar, Icon, Carousel, WingBlank, Grid } from 'antd-mobile';
import { SearchOutlined, UserOutlined } from '@ant-design/icons';
import { BackTop } from 'antd';

import BookShelf from '../Bookshelf/index';
import Money from '../Money/index.jsx';
import Boy from '../Boy/index.jsx';
import Girls from '../Girls/index.jsx';
import Client from '../Client/index.jsx';

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
@connect(mapStateToProps,mapDispatchToProps)
// @withRouter
class Home extends React.Component {
   state = {
      data: ['1', '2', '3'],
      imgHeight: 100,
   }

   // 轮播图数据
   componentDidMount() {
      // simulate img loading
      setTimeout(() => {
         this.setState({
            // data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
            data: [
               {
                  id: '',
                  text: '霸婿（又名：生而不凡 上门龙婿 神级狂婿）',
                  img: 'https://i.zhulang.com/admin/bang/2020-01-09/5e16bdb842006.jpg'
               },
               {
                  id: '',
                  text: '武极神王',
                  img: 'https://i.zhulang.com/admin/bang/2019-10-28/5db67ee4bc1c2.jpg'
               },
               {
                  id: '',
                  text: '',
                  img: 'https://i.zhulang.com/admin/bang/2020-04-05/5e88b2fb1ac92.jpg'
               }
            ]
         });
      }, 100);
   };

   menu = [
      {
         id: 1,
         title: '书架',
         path: '/bookShelf',
         name: 'bookShelf',
         component: BookShelf,
         img: 'https://s.zhulang.com/wap/pub/v2/style/img/icon_shujia.png',
      },
      {
         id: 2,
         title: '充值',
         path: '/money',
         name: 'money',
         component: Money,
         img: 'https://s.zhulang.com/wap/pub/v2/style/img/icon_chongzhi.png',
      },
      {
         id: 3,
         title: '男生',
         path: '/boy',
         name: 'boy',
         component: Boy,
         img: 'https://s.zhulang.com/wap/pub/v2/style/img/icon_nansheng.png',
      },
      {
         id: 4,
         title: '女生',
         path: '/girls',
         name: 'girls',
         component: Girls,
         img: 'https://s.zhulang.com/wap/pub/v2/style/img/icon_nvsheng.png',
      },
      {
         id: 5,
         title: '客户端',
         path: '/client',
         name: 'client',
         component: Client,
         img: 'https://s.zhulang.com/wap/pub/v2/style/img/icon_kehuduan.png',
      },
   ]

   data = this.menu.map((item, index) => ({
      icon: item.img,
      text: item.title,
      path: item.path,
   }));

   render() {
      const {isLogin,dispatch,logout} = this.props;


      return (
         <div className="home">
            {/* 顶部 */}
            <div className="top">
               {/* 头部 */}
               <div className="head">
                  <h1><img src="https://s.zhulang.com/wap/v2/style/img/mlogo-170730.png" alt="" /></h1>
                  <a className="search">搜小说、作者<i><SearchOutlined /></i></a >
                  <a className="user">
                     {
                     isLogin?
                     <UserOutlined onClick={() => { this.props.history.push('/mine') }} />
                     :
                     <UserOutlined onClick={() => { this.props.history.push('/login') }} />
                     }
                     </a>
               </div>
               {/* 轮播图 */}
               <div className="Carousel">
                  <WingBlank>
                     <Carousel
                        autoplay={false}
                        infinite
                        autoplay
                     >
                        {this.state.data.map(val => (
                           <a
                              key={val}
                              href="http://www.alipay.com"
                              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                           >
                              <img
                                 src={val.img}
                                 alt=""
                                 style={{ width: '100%', height: 134, verticalAlign: 'top' }}
                                 onLoad={() => {
                                    // fire window resize event to change height
                                    window.dispatchEvent(new Event('resize'));
                                    this.setState({ imgHeight: 'auto' });
                                 }}
                              />
                           </a>
                        ))}
                     </Carousel>
                  </WingBlank>
               </div>
            </div>
            <div className="main">
               {/* 书架充值等子路由 */}
               <div className="navigation">
                  <div className="sub-title">
                     <Grid
                        columnNum={5}
                        hasLine={false}
                        data={this.data}
                        activeStyle={false}
                        // onClick={() => { this.props.history.push('/boy') }}
                        onClick={(item, index) => { this.props.history.push(item.path) }}
                     />
                  </div>
               </div>
               {/* 主体部分 */}
               <div className='nav'><div className="box">推荐</div><a href="#">三尺人生</a></div>
               <div className="part1">
                  <h3>编辑推荐</h3>
                  <ul>
                     <li onClick={()=>{this.props.history.push('/bookdetalis')}}><a>
                        <img src="https://i.zhulang.com/xxs_book_cover/image/67/79/677942_x160.jpg" alt="" />
                        <div>
                           <h4>传国工匠</h4>
                           <span>陈酿 | 人物传记</span>
                           <p>中国东南沿海瓯江流域，为了一个七十年前不同寻常的盟约，五家顶级瓯派（温州）匠工的传人在寻找秘笈《瓯宝图》过程中，与境外正邪两大力量之间发生殊死冲突及各派瓯越匠人之间颇有历史渊源的爱恨情仇的传奇。
                           【向新中国成立70周年献礼参赛作品】本书荣获2019优秀网络文学推介、2019扬子江原创网络文学大赛特别奖

                           【主要故事线索】：
                           1、中国瓯匠与上世纪来到中国的传教士订立了70年护宝盟约。
                           2、瓯匠传人为寻找《瓯宝图》以及“瓯宝”，与境外邪恶势力的生死夺宝。
                              3、瓯匠传人之间的几代人爱恨情仇以及与境外善恶两大力量的历史恩怨纠缠。</p>
                        </div>
                     </a></li>
                     <li onClick={()=>{this.props.history.push('/bookdetalis')}}><a>
                        <img src="https://i.zhulang.com/book_cover/image/73/86/738645_x160.jpg" alt="" />
                        <div>
                           <h4>大明工业帝国</h4>
                           <span>三酸二碱 | 唐宋元明</span>
                           <p>毛瑟步枪、蒸汽火车、蒸汽机船……
                           工科博士回到古代，建立工业体系，打造一个领先世界的科技王朝。
                           炮轰西方国门。
                              逼迫西方各国签订无数不平等条约！</p>
                        </div>
                     </a></li>
                     <li onClick={()=>{this.props.history.push('/bookdetalis')}}><a>
                        <img src="https://i.zhulang.com/book_cover/image/56/4/560433_x160.jpg" alt="" />
                        <div>
                           <h4>修罗神魂</h4>
                           <span>好人卡 | 异世大陆</span>
                           <p>九州大陆，强者为尊，陨落天才楚星雨巧得修罗神骨，破苍穹，逆乾坤。
                              修无上传承，凝最强神魂，战无不胜，无人敢挡！！！</p>
                        </div>
                     </a></li>
                  </ul>
               </div>
               <div className="part2">
                  <h3>原创男生</h3>
                  <ul>
                     <a>
                        <img src="https://i.zhulang.com/book_cover/image/39/13/391371_x160.jpg" alt="" />
                        <span>混沌初始</span>
                     </a>
                     <a>
                        <img src="https://i.zhulang.com/book_cover/image/39/13/391371_x160.jpg" alt="" />
                        <span>混沌初始</span>
                     </a>
                     <a>
                        <img src="https://i.zhulang.com/book_cover/image/39/13/391371_x160.jpg" alt="" />
                        <span>混沌初始</span>
                     </a>
                     <a>
                        <img src="https://i.zhulang.com/book_cover/image/39/13/391371_x160.jpg" alt="" />
                        <span>混沌初始</span>
                     </a>
                     <a>
                        <img src="https://i.zhulang.com/book_cover/image/39/13/391371_x160.jpg" alt="" />
                        <span>混沌初始</span>
                     </a>
                     <a>
                        <img src="https://i.zhulang.com/book_cover/image/39/13/391371_x160.jpg" alt="" />
                        <span>混沌初始</span>
                     </a>
                  </ul>
                  <div className="channel"><a href="">进入男生频道 ></a></div>
               </div>
               <div className="part2">
                  <h3>女生专区</h3>
                  <ul>
                     <a>
                        <img src="https://i.zhulang.com/xxs_book_cover/image/68/18/681821_x160.jpg" alt="" />
                        <span>天瓷国芳</span>
                     </a>
                     <a>
                        <img src="https://i.zhulang.com/xxs_book_cover/image/68/18/681821_x160.jpg" alt="" />
                        <span>天瓷国芳</span>
                     </a>
                     <a>
                        <img src="https://i.zhulang.com/xxs_book_cover/image/68/18/681821_x160.jpg" alt="" />
                        <span>天瓷国芳</span>
                     </a>
                     <a>
                        <img src="https://i.zhulang.com/xxs_book_cover/image/68/18/681821_x160.jpg" alt="" />
                        <span>天瓷国芳</span>
                     </a>
                     <a>
                        <img src="https://i.zhulang.com/xxs_book_cover/image/68/18/681821_x160.jpg" alt="" />
                        <span>天瓷国芳</span>
                     </a>
                     <a>
                        <img src="https://i.zhulang.com/xxs_book_cover/image/68/18/681821_x160.jpg" alt="" />
                        <span>天瓷国芳</span>
                     </a>
                  </ul>
                  <div className="channel"><a href="">进入女生频道 ></a></div>
               </div>
               <div className="part3">
                  <h3>限时免费</h3>
                  <ul>
                     <li><a href="">
                        <img src="https://i.zhulang.com/book_cover/image/65/35/653593_x160.jpg" alt="" />
                        <div>
                           <h4>大别山下小女人<span>已经结束</span></h4>
                           <span>金龙子 | 成功励志</span>
                           <p>在大西北当兵退伍的方琳琳，在返家的路上，遇到一对骑马结婚的新人，走近时发现新郎是与她刚刚失去联系一个月的男友贾正，而新娘则是她的同学胡玥。失去理智的方琳琳，大闹接亲现场。
                           涉世未深的妹妹方淑淑与网友约会，险遭伤害，做芝麻油坊生意的父亲遭遇车祸之灾。年事已高的母亲，心脏病发作，住进了医院。方琳琳最后决心到大城市发展。
                           在灯红酒绿的都市中，毫无一技之长的方琳琳，遭遇着谋生的艰辛，是无数曾经脱下军装回到社会的退伍军人遭遇的缩影之一。方琳琳开过大货车、当过女保安、当过私人司机，又做过服装厂的女工。
                              最终方琳琳放弃了在大城市的发展，回农村继承了父亲的芝麻油坊的生意………</p>
                        </div>
                     </a></li>
                     <li><a href="">
                        <img src="https://i.zhulang.com/book_cover/image/62/39/623901_x160.jpg" alt="" />
                        <div>
                           <h4>最强神话进化<span>已经结束</span></h4>
                           <span>顽强的小树 | 东方玄幻</span>
                           <p>灵气喷发，地球复苏，万物进化，基因突变。乱世中崛起...太古时代的神话是否存在？</p>
                        </div>
                     </a></li>
                  </ul>
               </div>
               <div className="part4">
                  <h3>新书尝鲜<em><i>潜力榜</i><i>人气榜</i></em></h3>
                  <ul>
                     <li>
                        <div className='pic1'><i>1</i><b></b><img src="https://i.zhulang.com/book_cover/image/44/75/447554_x160.jpg" alt="" /></div>
                        <div>
                           <h4>太古神祖</h4>
                           <span>空无痕 | 东方玄幻</span>
                           <p>古之武者引九虚星辰之力，结星辰印记，修炼星魂，壮大己身。
                           武道圣贤遨游九虚星辰万界，无所不能。
                                 少年萧凡装疯卖傻五年，一朝觉醒，重回巅峰，誓要走出一个朗朗乾坤……</p>
                        </div>
                     </li>
                  </ul>
                  <div className='list'>
                     <p><a href=""><i className='num'>2</i><span>[青春文学] 重生之逆流人生</span></a></p>
                     <p><a href=""><i className='num'>3</i><span>[异世大陆] 八荒战仙</span></a></p>
                     <p><a href=""><i className='num'>4</i><span>[异世大陆] 绝世武神</span></a></p>
                     <p><a href=""><i className='num'>5</i><span>[文学艺术] 属于你的那一缕阳光</span></a></p>
                  </div>
               </div>
               {/* 底部 */}
               <div className='bottom'>
                  <section className="app-down">
                     <a href="" className="app-link">下载逐浪小说App客户端</a>
                     <span>海量独家小说，完美阅读体验</span>
                  </section>
                  <div className='login'>
                     <span onClick={() => { this.props.history.push('/login') }}>登录</span><em><BackTop style={{ display: "inline-block" }} /><BackTop style={{ display: "inline-block" }}>返回顶部</BackTop></em>
                  </div>
                  <div className='search'>
                     <input type="text" placeholder='搜索书名、作者、分类等' />
                     <i className='magnifier'><SearchOutlined style={{ display: 'inline-block' }} /></i>
                  </div>
               </div>
            </div>
         </div>
      )
   }
}

// 导出此组件
Home = withRouter(Home);

export default Home;