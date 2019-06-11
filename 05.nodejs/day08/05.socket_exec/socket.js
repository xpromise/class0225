const server = require('http').createServer();
const io = require('socket.io')(server);

// 客户端和服务端连接上
io.on('connect', (socket) => {

  // 接收客户端发送的消息
  socket.on('client_to_server', (msg) => {
    console.log('客户端发送给服务端的消息: ', msg);
    // 将消息转发给其他客户端
    socket.broadcast.emit('server_to_client', msg);
  });

});

server.listen(3000, (err) => {
  if (!err) console.log('socket服务器启动了', 3000);
  else console.log(err);
});