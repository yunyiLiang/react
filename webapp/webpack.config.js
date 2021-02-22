const path = require('path');  //引入node.js文件中的path模块
const HtmlWebpackPlugin = require('html-webpack-plugin');  //引入安装插件模块

module.exports = {
   // 入口
   entry:'./src/main.jsx',

   // 出口
   // output:{},

   // 测试服务器
   devServer:{
      // 配置服务器根目录
      contentBase:path.join(__dirname,'./public'),
      port:2004,
   },

   resolve:{

      alias:{
         "@":path.resolve('./src'),
     },

      // 默认扩展名
      extensions:['.js','.jsx']
   },

   // 加载器loader
   module:{
      rules:[
         // js文件加载器
         {
            test:/\.jsx?$/,
            use:[{
               loader:'babel-loader', //编译整个js代码
               options:{
                  // 用于把JSX编译成React.createElement()
                  presets:['@babel/preset-react'], 
                  //解决箭头函数问题，可以在类组件中直接使用箭头函数，不用每次都获取自定义函数中的this                                        
                  plugins:[
                     ['@babel/plugin-proposal-decorators',{legacy: true}],//解决 ES7装饰器写法问题
                     ['@babel/plugin-proposal-class-properties',{loose:true}],  
                     // antd按需加载
                  ],
               } 
            }]
         },
         // css文件加载器
         {
            test:/\.css$/,
            use:['style-loader','css-loader']  //书写顺序为倒序
         },
         // scss文件加载器
         {
            test:/\.scss$/,
            use:['style-loader','css-loader','sass-loader']  //书写顺序为倒序
         },
      ]
   },

   // 插件
   plugins:[
      // 用于生成html文件，默认为index.html
      new HtmlWebpackPlugin({
         template:path.join(__dirname,'./public/index.html')
      })
   ]

}