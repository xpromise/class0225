# Promise
* 概念：Promise 对象用于表示一个异步操作的最终状态（完成或失败），以及该异步操作的结果值。
* 语法：new Promise(executor)
  * resolve 将promise改为 fulfilled
  * reject 将promise改为 rejected
  * 抛异常 将promise改为 rejected
* 三个状态
  * pending 初始化状态
  * fulfilled 成功/完成状态
  * rejected 失败状态
