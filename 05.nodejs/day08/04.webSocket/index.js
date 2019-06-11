// 创建socket服务
const server = require('http').createServer();
// io可以看做服务器对象
const io = require('socket.io')(server);

/*
  1. 如何接收客户端发送的消息
    - 建立连接(客户端和服务端连接)
  2. 如何向客户端发送消息
 */

// 绑定事件监听，监听客户端是否连接上服务端
io.on('connect', (socket) => {
  // socket可以看做当前连接上的客户端
  // 一旦客户端连接上，监听客户端发送的消息
  socket.on('client_to_server', (msg) => {
    // msg就是客户端发送过来的消息
    console.log('客户端发送给服务端的消息', msg);
  });
  // 当前客户端连接上时，主动推送一条消息给客户端
  // socket.emit('server_to_client', 'hello, nice to meet you!'); // 发送给当前连接上的客户端
  // io.emit('server_to_client', 'hello, nice to meet you!'); // 发送给所有连接上的客户端
  // socket.broadcast.emit('server_to_client', 'hello, nice to meet you!'); // 发送给除了当前连接上的客户端所有连接上的客户端，
});

// 监听端口号
server.listen(4000, (err) => {
  if (!err) console.log('服务器启动成功了~', 4000);
  else console.log(err);
});