/*
    gulp的配置文件：gulpfile.js

    使用步骤:
       1. 去插件网找插件 gulp-xxx
       2. 打开插件，下包 npm i xxx -D
       3. 配置插件任务
       4. 运行： 来到项目根目录输入指令： gulp 任务名
 */

// 1. 引入
const gulp = require('gulp');
const babel = require('gulp-babel');

// 2. 配置任务
gulp.task('babel', function () {

  return gulp.src('src/js/*.js')  // 将指定目录下的所有文件导入gulp的流中（读取文件）
    .pipe(babel({  // 使用gulp-babel插件对流中的文件进行处理（将es6语法高级语法转换成es5以下语法，将es6模块化语法转换成commonjs模块化语法 ）
      presets: ['@babel/env']
    }))
    .pipe(gulp.dest('build/js')) // 将流中的文件写入到指定目录下（将文件输出到其他目录中去）

});
