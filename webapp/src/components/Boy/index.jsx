// 引入依赖
import React, { Component } from 'react';
import { LeftOutlined, HomeOutlined, SearchOutlined } from '@ant-design/icons';
import { Carousel, WingBlank } from 'antd-mobile';
import { BackTop } from 'antd';


import '../../assets/sass/public/common.scss';
import './style.scss'


class Boy extends Component {
   state = {
      Carouseldata: ['1', '2', '3'],
   }
   go=()=>{
      this.props.history.push('/home');
   }

   componentDidMount() {
      // simulate img loading
      setTimeout(() => {
         this.setState({
            // Carouseldata: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
            Carouseldata: [
               {
                  text: '大河峥嵘',
                  img: 'https://i.zhulang.com/admin/bang/2020-01-09/5e16ca5cb228c.jpg',
                  id: ''
               },
               {
                  text: '万古狂尊',
                  img: 'https://i.zhulang.com/admin/bang/2020-01-09/5e16c693e1490.jpg',
                  id: ''
               },
               {
                  text: '武极神王',
                  img: 'https://i.zhulang.com/admin/bang/2019-10-28/5db67fbd9e421.jpg',
                  id: ''
               },
            ]
         });
      }, 100);
   }

   render() {
      return (
         <div>
            <div className='wrap'>
               <div className='boyTop'>
                  <i><LeftOutlined /></i>
                  <p><span>男生</span><span className='girls' onClick={()=>{ this.props.history.push('/girls');}}>女生</span></p>
                  <i className='boyI'><HomeOutlined onClick={this.go} /></i>
               
               </div>
               <div className='boyMain'>
                  <div className='Carousel'>
                  <WingBlank >
                     <Carousel
                        autoplay
                        infinite
                        dots={false}
                        style={{position:'absolute',left:'0'}}
                     >
                        {this.state.Carouseldata.map(val => (
                           <a
                           key={val}
                           href=" "
                           style={{ display: 'inline-block', width: '100%' }}
                           >
                           <img
                              src={val.img}
                              alt=""
                              style={{ width: '100%', verticalAlign: 'top'}}
                              onLoad={() => {
                                 window.dispatchEvent(new Event('resize'));
                                 this.setState({ imgHeight:'auto'});
                              }}
                           />
                           </a>
                        ))}
                     </Carousel>
                  </WingBlank>
                  </div>
                  <div className='ch2'>
                     <h3>男生热点</h3>
                     <ul>
                        <li><a href="">
                           <img src="https://i.zhulang.com/book_cover/image/38/28/382824_x160.jpg" alt="" />
                           <div>
                              <h4>老爸老妈</h4>
                              <span>散仙 | 现实百态</span>
                              <p>作品人物老爸和老妈是50年代的知识分子，经历了毕业、分配 工作、结婚生子、子女成家、退休享受晚年，中间有欢乐，有痛苦，当今社会金钱与亲情的碰撞，人与人之间的变化，现实生动展现了人生观、事业观和家庭观，值得人们深思。
                              【向新中国成立70周年献礼参赛作品】</p>
                           </div>
                        </a></li>
                        <li><a href="">
                           <img src="https://i.zhulang.com/book_cover/image/38/28/382824_x160.jpg" alt="" />
                           <div>
                              <h4>老爸老妈</h4>
                              <span>散仙 | 现实百态</span>
                              <p>作品人物老爸和老妈是50年代的知识分子，经历了毕业、分配 工作、结婚生子、子女成家、退休享受晚年，中间有欢乐，有痛苦，当今社会金钱与亲情的碰撞，人与人之间的变化，现实生动展现了人生观、事业观和家庭观，值得人们深思。
                              【向新中国成立70周年献礼参赛作品】</p>
                           </div>
                        </a></li>
                        <li><a href="">
                           <img src="https://i.zhulang.com/book_cover/image/38/28/382824_x160.jpg" alt="" />
                           <div>
                              <h4>老爸老妈</h4>
                              <span>散仙 | 现实百态</span>
                              <p>作品人物老爸和老妈是50年代的知识分子，经历了毕业、分配 工作、结婚生子、子女成家、退休享受晚年，中间有欢乐，有痛苦，当今社会金钱与亲情的碰撞，人与人之间的变化，现实生动展现了人生观、事业观和家庭观，值得人们深思。
                              【向新中国成立70周年献礼参赛作品】</p>
                           </div>
                        </a></li>
                     </ul>
                  </div>
                  <div className='com-sec'>
                     <h3>编辑热推</h3>
                     <ul>
                        <li><a href="">
                           <img src="https://i.zhulang.com/book_cover/image/67/12/671299_x160.jpg" />
                           <span>核医荣誉</span>
                        </a></li>
                        <li><a href="">
                           <img src="https://i.zhulang.com/book_cover/image/67/12/671299_x160.jpg" />
                           <span>核医荣誉</span>
                        </a></li>
                        <li><a href="">
                           <img src="https://i.zhulang.com/book_cover/image/67/12/671299_x160.jpg" />
                           <span>核医荣誉</span>
                        </a></li>
                        <li><a href="">
                           <img src="https://i.zhulang.com/book_cover/image/67/12/671299_x160.jpg" />
                           <span>核医荣誉</span>
                        </a></li>
                     </ul>
                  </div>
                  <div className='free'>
                     <h3>限时免费</h3>
                     <ul>
                        <li><a href="">
                           <img src="https://i.zhulang.com/book_cover/image/65/35/653593_x160.jpg" alt="" />
                           <div>
                              <h4>老爸老妈<span>已经结束</span></h4>
                              <span>散仙 | 现实百态</span>
                              <p>作品人物老爸和老妈是50年代的知识分子，经历了毕业、分配 工作、结婚生子、子女成家、退休享受晚年，中间有欢乐，有痛苦，当今社会金钱与亲情的碰撞，人与人之间的变化，现实生动展现了人生观、事业观和家庭观，值得人们深思。
                              【向新中国成立70周年献礼参赛作品】</p>
                           </div>
                        </a></li>
                        <li><a href="">
                           <img src="https://i.zhulang.com/book_cover/image/65/35/653593_x160.jpg" alt="" />
                           <div>
                              <h4>老爸老妈<span>已经结束</span></h4>
                              <span>散仙 | 现实百态</span>
                              <p>作品人物老爸和老妈是50年代的知识分子，经历了毕业、分配 工作、结婚生子、子女成家、退休享受晚年，中间有欢乐，有痛苦，当今社会金钱与亲情的碰撞，人与人之间的变化，现实生动展现了人生观、事业观和家庭观，值得人们深思。
                              【向新中国成立70周年献礼参赛作品】</p>
                           </div>
                        </a></li>
                     </ul>
                  </div>
                  <div className='newBook'>
                     <h3>新书尝鲜<em><i>潜力榜</i><i>人气榜</i></em></h3>
                     <ul>
                        <li>
                           <div className='pic1'><i>1</i><b></b><img src="https://i.zhulang.com/book_cover/image/40/71/407124_x160.jpg" alt="" /></div>
                           <div>
                              <h4>老爸老妈</h4>
                              <span>散仙 | 现实百态</span>
                              <p>作品人物老爸和老妈是50年代的知识分子，经历了毕业、分配 工作、结婚生子、子女成家、退休享受晚年，中间有欢乐，有痛苦，当今社会金钱与亲情的碰撞，人与人之间的变化，现实生动展现了人生观、事业观和家庭观，值得人们深思。
                                 【向新中国成立70周年献礼参赛作品】</p>
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
                  <div className='classics'>
                     <h3>重温经典</h3>
                     <ul>
                           <li><a href="">
                              <img src="https://i.zhulang.com/book_cover/image/67/12/671299_x160.jpg"/>
                              <span>核医荣誉</span>
                              </a></li>
                           <li><a href="">
                              <img src="https://i.zhulang.com/book_cover/image/67/12/671299_x160.jpg"/>
                              <span>核医荣誉</span>
                           </a></li>
                           <li><a href="">
                              <img src="https://i.zhulang.com/book_cover/image/67/12/671299_x160.jpg"/>
                              <span>核医荣誉</span>
                           </a></li>
                        </ul>

                  </div>
               </div>
               <div className='bottom'>
               <section className="app-down">
                  <a href="" className="app-link">下载逐浪小说App客户端</a>
                  <span>海量独家小说，完美阅读体验</span>
               </section>
               <div className='login'>
                  <span>登录</span><em><BackTop style={{display:'inline-block'}} /><BackTop style={{display:'inline-block'}}>返回顶部</BackTop></em>
                    
               </div>
               <div className='search'>
                  <input type="text" placeholder='搜索书名、作者、分类等' />
                  <i className='magnifier'><SearchOutlined style={{display:'inline-block'}} /></i>
               </div>
            </div>
            </div>
         </div>
      )
   }

}



// 导出此组件
export default Boy;