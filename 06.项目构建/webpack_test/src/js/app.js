// 引入
import { sum } from './module1';

// 引入json文件
import data from '../json/data';

// 引入less文件: 目的不是为了使用less文件，为了引入之后，webpack通过依赖找到要打包的less资源
import '../less/test1.less';
import '../less/test2.less';
import '../less/iconfont.less';

console.log(sum(1, 2, 3, 4, 5));
// console.log(name);
console.log(data);

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then(registration => {
        console.log('SW registered: ', registration);
      })
      .catch(registrationError => {
        console.log('SW registration failed: ', registrationError);
      });
  });
}