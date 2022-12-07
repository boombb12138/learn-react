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



# 搭界面

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

```javascript
import styled from "styled-components";
.desc {
    margin: 10px 0 5px;
    font-size: 12px;
    font-weight: 700;
    color: ${(props) => props.verifyColor};
  }
```

svg图片使用到了styleStrToObject 将网页复制下来的svg中字符串样式转为对象

#### Mixins

阴影 动画 抽取

在theme中

```css
  mixin: {
    boxShadow: ` 
    transition: box-shadow 200ms ease;
    &:hover {
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.18); //x y 扩展 透明度
    }
    `,
  },
```

需要加阴影的元素的css中：

```javascript
 ${(props) => props.theme.mixin.boxShadow}
```



### 点击出现panel栏

一定是绝对定位 高度由内部元素撑起，不设置固定值

切换显示、隐藏：showPanel值 再写事件处理函数  

隐藏：监听点击 是在useEffect 监听window的点击，这样在其他地方仍然可以交互；在捕获阶段 

```javascript
  useEffect(() => {
    function windowHandleClick() {
      setShowPanel(false);
    }

    // 最后1个参数true 是为了做事件捕获 防止事件冒泡而将showPanel设置为false
    window.addEventListener("click", windowHandleClick, true);
    return () => {
      window.removeEventListener("click", windowHandleClick, true);
    };
  }, []);
```



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

```javascript
export const HomeWrapper = styled.div`
  > .content {
    width: 1032px;
    margin: 0 auto;
  }
`;
```



##### 网络请求获取数据的过程

代码在：

E:\工作\产品经理\React\learn-react\airbnb\src\store\modules\home.js

E:\工作\产品经理\React\learn-react\airbnb\src\store\index.js

修改state要通过reducer



  redux中（store文件夹）通过createAsyncThunk调用网络请求方法得到数据 

在组件中的useEffect通过dispatch派发异步事件  通过useSelector获取数据

```javascript
 const { goodPriceInfo } = useSelector(
    (state) => ({
      goodPriceInfo: state.home.goodPriceInfo,
    }),
    shallowEqual
  );

const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHomeDataAction("xxxx"));
  }, [dispatch]);
```



##### 数据展示

小的组件放到components

rmcp会增加propTypes对传入的参数做类型验证



### footer部分

直接看代码



## 高性价比模块

### room-item组件

代码：E:\工作\产品经理\React\learn-react\airbnb\src\components\room-item\style.js

总的是弹性布局，可以换行

第一次没有数据 就给map之前的数据后面加上?

只展示前8条数据：用slice

**间距：**一行排4个 每个width是25% border-box 然后间距用padding撑开 最右和最左的左边距和右边距在最外层的盒子用margin:0 -数值 向左移动

##### 除了padding之外做一个inner div

先搭html结构展示数据

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



### Antd和MUI的集成

#### MUI的集成

css是用css in js 要用styled-component\emotion编译 

如果用styled-component需要在webpack中配置别名 同时安装emotion，因为底层MUI的依赖了emotion（卸载emotion的时候，nodemodule里面还有这个包）

引入组件才能用

#### Antd的集成

1. 安装antd

如果要写less就要配置插件选项

2. 在index中引入

#### 做五星好评：

自定义大小和颜色、间距

#### 查看更多





## 高评分模块

在service的home模块里封装网络请求

在store的home里发生请求，在AsyncThunk里发送2个网络请求，

1. 如果用await 就会等到一个请求完成后再请求另一个 
2. 用Promise，然后将store解构出dispatch，将派发action 

可以用Promise.then的方法拿到数据后dispatch

```
export const fetchHomeDataAction = createAsyncThunk(
  "fetchdata",
  (payload, { dispatch }) => {
    getHomeGoodPriceData().then((res) => {
      dispatch(changeGoodPriceInfoAction(res));
    });
    getHomeHighScoreData().then((res) => {
      dispatch(changeHighScoreInfoAction(res));
    });
  }
```

在view的home里拿到数据并展示



### 选项卡切换

##### 点击每个选项卡就显示对应的页面

整理数据 过滤出有对应id的数据

 在service的home模块里封装网络请求

在store的home里的AsyncThunk里发送网络请求，

2个地方不能写固定值 动态传入宽度：

在index中传入 然后通过props拿到 在sectionRoom拿到width再传递给RoomItem，RoomItem通过props接收，再传递给ItemWrapper（样式组件）   在ItemWrapper中通过props拿到itemWidth

##### tabs的封装和切换

封装SectionTabs组件

数据转换 ：在home的index中拿到每个item的name

展示数据 html和css flex-basis

内部切换：监听点击 currentIndex记录哪个被点击 

安装classnames 样式里有active就添加背景色

将内部切换的事件传递给外部 子传父：

父给子传递函数 在Home的index中给SectionTabs传函数 用useCallback包裹

将name定义为变量

##### 抽取处理折扣数据的代码到HomeSectionV2

name的初始化值如何设置

从infoData取值：Object.keys可以拿到属性名

useState的初始值只在第一次渲染的时候有用，如果第一次渲染的值是空，后面的渲染即使是给useState传入了值，初始值仍然是空

解决方法：当数据不为空的时候才渲染组件

!!可以将数据转为布尔类型 有数据才渲染 性能优化了



#### section的footer部分

插入svg文件夹里的更多组件

flex布局可以只在div显示鼠标手

什么属性都不传就显示黑色的

传入name的时候就显示绿色那种

在section v2就要传入name 拼贴显示

显示不同的颜色：通过name三元运算符 ；在style中通过props



#### tab的滚动效果-ScrollView组件的封装

在外层display:flex的时候  内层flex-shrink为0就不会压缩

用transform

做scroll和按钮这些公共的部分

内容不同 通过插槽传入props.children 用flex布局

在baseui中做 因为组件可以在其他项目用

如果内容大于宽度就显示右边的按钮 ：

等服务器返回内容、组件渲染完毕，在useEffect中判断是否显示按钮

```javascript
const [showRight, setShowRight] = useState(false);
const scrollContentRef = useRef();
  useEffect(() => {
    const scrollWidth = scrollContentRef.current.scrollWidth; //数据一共的长度
    const clientWidth = scrollContentRef.current.clientWidth;
    const totalDistance = scrollWidth - clientWidth; //剩下的长度
    setShowRight(totalDistance > 0);
  }, [props.children]);

  return (
    <ViewWrapper>
      <button>左边按钮</button>
      {showRight && <button>右边按钮</button>}
      <div className="scroll">
        <div className="scroll-content" ref={scrollContentRef}>
          {props.children}
        </div>
      </div>
    </ViewWrapper>
```

#### 点击右边的按钮就滚动：

记录索引：posIndex

每次滚动1个 newIndex = posIndex + 1

拿到newIndex对应的元素 newEl.offsetLeft 

offsetLeft是元素左上角和最近的有定位的父级元素的距离 注意：父级元素要设置定位

滚动动画

```javascript
 scrollContentRef.current.style.transform = `
        translate(-${newOffsetLeft}px)
    `;
```

当右边没有东西就不显示右边的按钮

```
showRight = totalDistance > newOffsetLeft
```

数据更新的时候不刷新页面，只要记录数据，就使用useRef

使用useState数据刷新的时候就会刷新页面

![Snipaste_2022-12-07_14-08-49](E:\工作\产品经理\React\learn-react\airbnb\public\Snipaste_2022-12-07_14-08-49.png)

只要offsetLeft>0就显示左边的按钮

按钮换成图标



#### 向往数据的请求和滚动展示

封装网络请求拿数据

```
src\services\modules\home.js
src\store\modules\home.js
```

在redux中看有没有拿到数据

在ccpns中封装longfor组件

在index中拿到数据 使用longfor组件

在longfor组件中展示数据 要封装longfor-item

多增加一层 半透明

```css
  .bg-cover {
    position: absolute;
    height: 60%;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: linear-gradient(
      -180deg,
      rgba(0, 0, 0, 0) 3%,
      rgb(0, 0, 0) 100%
    );
  }
```



#### Plus房源

在services home发送网络请求

在store获取数据

在ccpns中封装HomeSectionV3组件

在view的index中拿到数据 使用HomeSectionV3组件

HomeSectionV3组件中展示数据

要滚动就包裹在ScrollView中



#### 页面跳转

点击查看全部就来到另一个页面

```javascript
  const navigate = useNavigate();
  function moreClickHandle() {
    navigate("/entire");
  }
```

在view中写entire页面



#### entire页面

分为3部分 对应3个组件

#### 过滤

过滤会在url加过滤条件

有很多图片 但只有6个指示点





