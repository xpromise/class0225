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
const browserify = require('gulp-browserify');
const rename = require("gulp-rename");
const eslint = require('gulp-eslint');
const less = require('gulp-less');
const concat = require('gulp-concat');
const livereload = require('gulp-livereload');
const connect = require('gulp-connect');
const open = require('open');

// 2. 配置任务
gulp.task('babel', function () {

  return gulp.src('src/js/*.js')  // 将指定目录下的所有文件导入gulp的流中（读取文件）
    .pipe(babel({  // 使用gulp-babel插件对流中的文件进行处理（将es6语法高级语法转换成es5以下语法，将es6模块化语法转换成commonjs模块化语法 ）
      presets: ['@babel/env']
    }))
    .pipe(gulp.dest('build/js')) // 将流中的文件写入到指定目录下（将文件输出到其他目录中去）
    .pipe(livereload())
});

gulp.task('browserify', function() {
  return gulp.src('build/js/app.js')
    .pipe(browserify())  // 将commonjs模块化转换成浏览器能识别的语法
    .pipe(rename('built.js')) // 对流中的文件进行重命名
    .pipe(gulp.dest('build/js'))
    .pipe(livereload())
});

// 使用eslint必须加上配置项
/*
  "eslintConfig": {
    "parserOptions": {
      "ecmaVersion": 6,  // 能使用es6
      "sourceType": "module" // 能使es6模块化
    },
    "extends": "eslint:recommended", // 使用eslint推荐默认配置
    "rules": {
      "no-console": 0 // 忽略 no-console 检查项
    },
    "env": {
      "browser": true  // 添加browser环境，允许使用浏览器的全局变量
    }
  }
 */
gulp.task('eslint', () => {
  return gulp.src(['src/js/*.js'])
    .pipe(eslint()) // 语法检查
    .pipe(eslint.format()) // 提示错误
    .pipe(eslint.failAfterError()) // 一旦出错了，就终止运行
    .pipe(livereload())
});

gulp.task('less', function () {
  return gulp.src('./src/less/*.less')
    .pipe(less()) // 将less文件编译成css文件
    .pipe(concat('built.css'))  // 合并多个css文件
    .pipe(gulp.dest('./build/css'))
    .pipe(livereload())
});

// 配置自动化任务
gulp.task('watch', function () {
  // 开启一个服务器
  livereload.listen();

  // 开启运行项目的服务器
  connect.server({
    name: 'dev App',
    root: 'build',
    port: 3000,
    livereload: true // 热更新，刷新页面
  });

  // 打开页面
  open('http://localhost:3000');

  // 监视指定文件的变化，一旦文件发生变化，就执行后续的任务进行处理
  gulp.watch('./src/js/*.js', gulp.series(['eslint', 'babel', 'browserify']));
  gulp.watch('./src/less/*.less', gulp.series(['less']));
});

// 3. 配置默认任务
gulp.task('js', gulp.series(['eslint', 'babel', 'browserify'])); // 同步：执行完前面任务，才能后面任务
gulp.task('default', gulp.parallel(['js', 'less'])); // 异步：同时执行多个任务，谁先做完谁先结束

gulp.task('dev', gulp.series(['default', 'watch']));