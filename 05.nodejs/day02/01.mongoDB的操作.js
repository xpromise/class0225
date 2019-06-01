/*
// 展示所有数据库
show dbs
// 展示当前数据库中所有集合
show collections
// 创建一个数据库。（数据库不需要自己创建，当你切换时会自动生成: 必须插入一条数据才能看到）
use test
// 创建一个集合（集合也不需要自己创建，使用时自动生成）
// 插入一条文档数据的数据，会自动创建集合和数据库
// 向当前数据库指定students集合插入一条文档数据
db.students.insert({name: 'jack', age: 18})
db.students.insert({name: 'rose', age: 18})
// 查找数据：
// 当前数据库students集合查找满足条件文档数据
db.students.find({})
db.students.findOne({age: 18})
// 更新数据的方法
// $set 修改
db.students.updateOne({name: 'jack'}, {$set: {age: 19}})
// $inc 增加  
db.students.updateOne({name: 'jack'}, {$inc: {age: 1}})
// 删除数据的方法
db.students.deleteOne({name: 'jack'})
*/
