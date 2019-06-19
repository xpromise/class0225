/*
  这个文件就是用来修改脚手架中webpack的配置
 */
const { override, fixBabelImports, addLessLoader } = require('customize-cra');

module.exports = override(
  // 按需加载组件的代码和样式（不会加载所有代码）
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  // 自定义主题
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      '@primary-color': '#1DA57A'
    },
  }),
);