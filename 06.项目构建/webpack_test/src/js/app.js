// 引入
import sum from './module1';
import { name, age } from './module2';
// 引入json文件
import data from '../json/data';

// 引入less文件: 目的不是为了使用less文件，为了引入之后，webpack通过依赖找到要打包的less资源
import '../less/test1.less';
import '../less/test2.less';
import '../less/iconfont.less';

console.log(sum(1, 2, 3, 4));
console.log(name, age);
console.log(data);