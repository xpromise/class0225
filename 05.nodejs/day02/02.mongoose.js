/*
  npm init -y
  npm i mongoose

  使用mongoose：
    1. 连接上数据库
    2. 创建约束对象
    3. 创建模型对象
    4. 创建文件对象

  除了node核心模块（自带的），都需要通过npm下载
 */
// 引入mongoose模块
const mongoose = require('mongoose');
// 1. 连接上数据库
const promise = new Promise((resolve, reject) => {
  // 如果数据库存在就连接上，不存在就会创建
  // mongoose.connect('mongodb://localhost:27017/数据库名称', 配置对象 options);
  // 配置对象： 叫做属性名/属性值固定的对象
  mongoose.connect('mongodb://localhost:27017/mongoose_test', { useNewUrlParser: true, useCreateIndex: true });
  // 为了判断数据库连接成功
  mongoose.connection.once('open', (err) => {
    if (!err) {
      console.log('数据库连接成功~');
      resolve();
    } else {
      console.log('数据库连接失败', err);
      reject();
    }
  });
});

(async () => {
  // 等等promise状态变成成功，才执行后面代码
  await promise;
  // 2. 创建约束对象
  const Schema = mongoose.Schema;
  // new Schema(对象)  这个对象会对集合中文档进行约束
  const studentsSchema = new Schema({
    name: {
      type: String,
      unique: true, // 唯一的
      required: true // 必须的
    },
    age: Number,
    sex: String,
    hobby: [String],
    info: Schema.Types.Mixed, // 任意数据类型
    createTime: {
      type: Date,
      default: Date.now // 默认值
    }
  });

  // 3. 创建模型对象 -- 集合
  // mongoose.model('集合名称', 约束对象)  集合名称：建议是复数形式
  const Students = mongoose.model('students', studentsSchema);
  // 4. 创建文档对象
  const s = new Students({
    name: '唐品唱',
    age: 23,
    sex: '男',
    hobby: ['唱', "跳"],
    info: '大家好，我是练习时长十年王牌练习生'
  });
  // 保存下载
  const result = await s.save();
  console.log(result);

})();

