# airbnb項目

# 项目搭建



编写组件内部代码的顺序

1. 组件内部状态 props/useState
2. 从redux中获取内容
3. 自定义hooks
4. 网络请求、事件监听、副作用
5. return jsx





jsconfig可以优化vscode的智能提示

### 搭项目的目录结构

### 配置别名

craco（create-react-config)第三方库可以配置文件别名 简化路径

安装库 修改package.json 新建craco.config配置webpack

安装less 配置less

谷歌、stackoverflow、英文搜索、第三方库版本问题看对应github的issues

修改配置就要重新run start

### CSS样式重置

a h1 body

安装normalize.css 引入

新建reset.css文件 重置a img等标签样式

less后面必须加；

```
@textColorSecondary:#222;
```

### Router配置

安装react-router-dom

第三方导入的写在上面

在App.jsx 使用useRoute将route放在router文件里



在views文件夹 一个页面对应一个文件

在router文件夹的index中 懒加载引入页面文件 再配置路由映射

### Redux状态管理

安装@reduxjs/toolkit react-redux

在store新建store

在index引入provider provider包裹App并传入store



2种方法都使用：

1. slice在home.js
2. 第2种方法在entire中

### Axios

安装axios

request中做二次封装 导出实例

- config单独放请求URL和超时时间

- index 对数据拦截 只要res.data数据在data中 

    暴露request、get、post请求方法

modules是不同模块的网络请求



在useEffect中发送网络请求 否则每次刷新都会发送请求

可选链 如果没有值就返回undefined不执行后续代码



### Header

只有1个Header组件 通过控制样式来决定不同页面的Header

写css in js 可以样式嵌套 在index中用HeaderWrapper包裹组件

模版字符串就相当于调用函数

让中间的居中：大的盒子  display: flex; 左右两边盒子为flex:1



svg可以让图片所占用的内存变小

把svg放在独立jsx组件中，在另一个文件中引入组件即可 

svg中currentColor就是离它最近的父级的颜色

styleStrToObject可以将style中字符串转成对象（在谷歌中用英语搜索style to Object）

#### logo颜色配置和主题文件配置

在index.js中使用

```html
   <ThemeProvider theme={theme}>
        <HashRouter>
          <App/>
        </HashRouter>
      </ThemeProvider>
```

用styled-component来管理样式主题 用props读取主题颜色



svg图片使用到了styleStrToObject 将网页复制下来的svg中字符串样式转为对象



阴影 动画 抽取

```
 ${(props) => props.theme.mixin.boxShadow}
```



### 点击出现panel栏

一定是绝对定位 高度由内部元素撑起，不设置固定值

切换显示、隐藏：showPanel值 再写事件处理函数  

隐藏：监听点击 是在useEffect 监听window的点击，这样在其他地方仍然可以交互；在捕获阶段 



### 主页

#### banner

引入图片时 url

在react中引入图片的方法

1. 需要import 然后传入src或url 因为webpack打包后图片的路径不再是原来

2. ```
   background:url(${require("图片路径")})
   ```



#### 中间的内容

直接子元素 >   避免类名重复导致样式被错误应用

##### 网络请求获取数据的过程

修改state要通过reducer

在组件中的useEffect通过dispatch派发异步事件 

  redux中（store文件夹）通过createAsyncThunk调用网络请求方法得到数据 

在组件中的useEffect通过dispatch派发异步事件  通过useSelector获取数据

##### 数据展示

小的组件放到components

rmcp会增加propTypes对传入的参数做类型验证



### footer部分

直接看代码



### room-item组件

总的是弹性布局，可以换行

第一次没有数据 就给map之前的数据后面加上?

只展示前8条数据：用slice

**间距：**一行排4个 每个width是25% border-box 然后间距用padding撑开 最右和最左的左边距和右边距在最外层的盒子用margin:0 -数值 向左移动

##### 除了padding之外做一个inner div

先搭html结构展示数据

好评星星用UI库：

**服务器给的图片的比例不一样** 宽度100% 高度就会不一致 

使用padding让高度是宽度的2/3 图片绝对定位

```
 .cover {
    position: relative;
    box-sizing: border-box;
    padding: 66.6% 8px 0;
    border-radius: 3px;
    overflow: hidden;

    img {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
    }
  }
```

文本的颜色由服务器决定 服务器会返回颜色：

给ItemWrapper传入服务器返回的数据



到14_(掌握)项目-首页-房间item的布局的展示过程





