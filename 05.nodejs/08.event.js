// events是nodejs核心模块
const Emitter = require('events');
// 用来实现自定义事件
class MyEmitter extends Emitter {}

// 创建事件实例对象
const myEmitter = new MyEmitter();
// 绑定自定义事件
myEmitter.on('myEvents123', function (...args) {
  console.log(args);
  console.log('自定义事件触发了111~');
});

myEmitter.on('myEvents456', function (...args) {
  console.log(args);
  console.log('自定义事件触发了222~');
});

// 触发自定义事件
myEmitter.emit('myEvents123', 123, 456, 789);


