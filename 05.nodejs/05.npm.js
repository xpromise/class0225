/*
  nodejs都是通过npm来下载要依赖的包(下载包之前，要先有包描述文件package.json)
    1. npm install/i xxx   等价于  npm i xxx --save/-S
      node_modules: 放置下载的包
      package-lock.json: 会缓存包下载地址。下次下载更快
      将包添加到package.json生产依赖中
    2. npm i xxx --save-dev/-D  下载并添加到开发依赖中
    3. npm i xxx -g 全局安装： 只用于运行指令
      npm i browserify -g
      browserify xxx -o yyy

      全局安装包的路径：C:\Users\XiongJian\AppData\Roaming\npm
    4. npm init 初始化一个包描述文件 package.json
      npm init -y 创建全部使用默认值 package.json
    5. npm i
      下载当前目录中package.json的所有依赖
    6. npm remove xxx
      删除包和依赖
 */

// 使用通过npm下载的包
const $ = require('jquery');


console.log($);