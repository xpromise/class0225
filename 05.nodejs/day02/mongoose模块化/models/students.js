/*
  用来创建模型对象模块
 */
// 每个模块都要引入自己模块需要使用的其他模块。
// commonjs会缓存模块，引入依次后，后面引入就是使用缓存
const mongoose = require('mongoose');
// 获取模式对象
const Schema = mongoose.Schema;
// 创建约束对象
const studentsSchema = new Schema({
  name: {
    type: String,
    // unique: true, // 唯一的
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
// 创建模型对象
const Students = mongoose.model('students', studentsSchema);
// 暴露出去
module.exports = Students;