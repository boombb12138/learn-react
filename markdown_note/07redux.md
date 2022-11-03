纯函数

- 不能依赖外部的变量
- 不能修改外部变量（副作用）
- props不能被修改

所有的组件都要像纯函数一样

确定的输入有确定的输出



## redux

共享状态





订阅

store一改变就执行sub回调

取消订阅

调用订阅函数的返回值



reducer一般用switch

##### redux代码优化

1. 重复的action封装成actionCreator函数 

2. 将这些actionCreator工具函数放到store文件夹下的actionCreator.js

3. 将reducer函数中条件判断的type换成常量Constants

4. 将reducer抽出

   ​

redux代码优化:

 *  1.将派发的action生成过程放到一个actionCreators函数中

 *  2.将定义的所有actionCreators的函数, 放到一个独立的文件中: actionCreators.js

 *  3.actionCreators和reducer函数中使用字符串常量是一致的, 所以将常量抽取到一个独立constants的文件中

 *  4.将reducer和默认值(initialState)放到一个独立的reducer.js文件中, 而不是在index.js

 */

index是放store的



#### redux3大原则

只创建一个store

唯一修改state的方法一定是触发action

所有的reducer都是纯函数

通过reducer来联系新旧state



redux的使用流程