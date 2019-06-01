// 引入mongoose模块
const mongoose = require('mongoose');
// 1. 连接上数据库
const promise = new Promise((resolve, reject) => {
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
  const Students = mongoose.model('students', studentsSchema);

  /*
    研究数据库的操作，就是研究CRUD
    C - create 增
      Students.create(文档对象[, 回调函数])  返回值一个promise，promise为成功时会返回文档对象
      nodejs函数特点：如果加上回调函数，返回值就是undefined。如果没有加上回调函数，返回值就是promise对象
    R - read 查
      Students.find(查询条件[, 投影]) 查找满足条件所有文档对象.  返回值时数组
      Students.findOne(查询条件[, 投影]) 查找满足条件第一个文档对象  没找到时null，找到了是对象
      - 操作符
        1. > >= < <= !=  $gt $gte $lt $lte $ne
        2. 或  $or $in
        3. $where
        4. 正则表达式

      投影： 将查找到的数据过滤一些不用的字段

    U - update 改
      Students.updateOne(查询条件, 要修改内容) 查找满足条件的第一个文档对象并修改
      Students.updateMany(查询条件, 要修改内容) 查找满足条件的所有文档对象并修改

    D - delete 删
      Students.deleteOne(查询条件)
      Students.deleteMany(查询条件)
   */

  // const result = await Students.deleteMany({name: /^郝/});

  // const result = await Students.updateMany({}, {$inc: {age: 1}});

  // 值为0，其他就是1（0不保留，1保留）
  // _id默认保留，除非设置0
  const result = await Students.find({}, {_id: 0, name: 0, age: 0});
  // const result = await Students.find({age: {$gte: 25}});
  // const result = await Students.find({$or: [{age: 25}, {age: 23}]}); // 多个属性
  // const result = await Students.find({age: {$in: [25, 23]}}); // 一个属性

  /*const result = await Students.find({$where: function () {
    // console.log(this); // 当前遍历的文档对象
    return this.age === 25 || this.age === 30;
  }});*/

  // const result = await Students.find({name: /^郝/});

  /*const result = await Students.create([{
    name: '郝洋洋456',
    age: 30,
    sex: '男',
    hobby: ['吃', '睡'],
    info: '河南小胖子'
  }, {
    name: '郝洋洋789',
    age: 30,
    sex: '男',
    hobby: ['吃', '睡'],
    info: '河南小胖子'
  }]);*/
  console.log(result);

})();

