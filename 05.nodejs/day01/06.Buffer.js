/*
  创建Buffer:
    1. new Buffer(10) 方法被废弃了，不要在使用
    2. Buffer.alloc() 找了内存清空里面所有数据，性能稍差
    3. Buffer.allocUnsafe() 不安全的，可能会包含敏感数据
    4. Buffer.from()  buf.toString()
 */

// const buf = new Buffer(10);
const buf1 = Buffer.alloc(10);
const buf2 = Buffer.allocUnsafe(10);

console.log(buf1); // <Buffer 00 00 00 00 00 00 00 00 00 00>
console.log(buf2); // <Buffer 00 b6 c1 5d 9c 02 00 00 a0 26>

/*
  十六进制 00 - ff
  十进制 0 - 255
  二进制 00000000 - 11111111

  1 byte（字节） = 8 bit（位）   位是计算机存储的最小单位
  1 kb = 1024 byte
  1 mb = 1024 kb
  1 gb = 1024 mb
  1 tb = 1024 gb
 */

console.log(buf2.length);
console.log(buf2[0]);
buf2[0] = 0b01;
console.log(buf2);

buf2.forEach(function (item, index) {
  console.log(item, index);
})

const person = {name: 'jack', age: 18};

// 将数据保存在buffer中
const buf3 = Buffer.from(JSON.stringify(person));
console.log(buf3);

// 读取buffer中数据
console.log(JSON.parse(buf3.toString())); // {"name":"jack","age":18}