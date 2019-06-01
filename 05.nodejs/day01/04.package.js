/*
  package.json 包描述文件：
    name： 包的名称  今后下载包就要输入包名
    version： 包的版本号   A.B.C
      A 大版本，发生巨大变化
      B 中版本，新添加、删除、修改部分功能
      C 小版本, 修复bug
    dependencies：生产依赖： 这个包要想运行，需要其他包的帮助
      项目运行时需要用依赖：jquery
    devDependencies：开发依赖
      项目构建打包时需要用的依赖：babel
    scripts： 指令
      里面会放置运行项目的指令
      "start" --> 开始运行项目的指令  npm start
      "build" --> 生成项目上线文件的指令 npm run build
      "test" --> 测试代码指令 npm run test

    注意：
      1. 不要有多余的东西。多余的逗号、注释
      2. 包名不能重复，下载jquery包，你的包名就不能叫jquery。不能中文
 */