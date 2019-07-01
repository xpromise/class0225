## redux
* 是什么？一个用于状态管理的库
* 作用：集中性管理多个组件共享的状态数据
* 原则：
  * 单一数据源：只能创建一个store
  * state是可读的：state只能直接读取，不能直接修改
  * 通过纯函数修改state

## react-redux
* Provider
* connect
* 组件分为两大类：
  * UI组件：负责页面的呈现，没有redux内容
    * components
  * 容器组件: 负责redux内容，将redux内容处理后传给UI组件使用
    * containers
  