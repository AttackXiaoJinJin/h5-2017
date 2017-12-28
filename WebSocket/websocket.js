window.onload=function () {
//新建ws实例   ws://localhost:8080
let ws=new WebSocket("wss://echo.websocket.org")
//开启连接
ws.onopen=function (event) {
  console.log("连接开启"+ws.readyState)
  ws.send("开通啦111")
}
//如果要指定多个回调函数，使用addEventListener
  /*
ws.addEventListener('open',function (event) {
  ws.send("开通啦open")
})
*/

  //向服务器发送数据
  let data = new ArrayBuffer(10000000);
  ws.send('发送信息给服务器'+data)
  //bufferedAmount表示多少字节还没有发送出去,用来判断发送是否结束
  if (socket.bufferedAmount === 0) {
    console.log("发送完毕")
  } else {
    console.log("发送还没结束");
  }


  //发送blob对象
  /*
  let file = document.querySelector('input[type="file"]').files[0]
  ws.send(file)
  */

  //发送ArrayBuffer对象
  /*
  let img = canvas_context.getImageData(0, 0, 400, 320);
  let binary = new Uint8Array(img.data.length);
  for (let i = 0; i < img.data.length; i++) {
    binary[i] = img.data[i];
  }
  ws.send(binary.buffer);
  */

  //显式指定收到的二进制数据类型
  //ws.binaryType="blob"
  //在onmessage中
  //console.log("数据大小"+data.size)
  //ws.binaryType="arraybuffer"
  //在message中
  //console.log(data.byteLength)

  //收到服务器数据后的回调函数
ws.onmessage=function (event) {
  let data=event.data
  //处理数据
  //注意！服务器数据可能是文本，也可能是二进制数据(blob对象或Arraybuffer对象)
  if(typeof data==="string"){
    console.log("数据是字符串类型")
  }
  if(data instanceof ArrayBuffer){
    console.log("数据是二进制数据")
  }

  console.log("收到消息:"+data+"++"+ws.readyState)


  ws.close()
}

ws.onclose=function (event) {

  let code=event.code
  let reason=event.reason
  let wasClean=event.wasClean
  console.log("连接关闭"+ws.readyState)
  console.log("code:"+code)
  console.log("reason:"+reason)
  console.log("wasClean:"+wasClean)
}

//readyState返回当前状态
  switch(ws.readyState){
    case WebSocket.CONNECTING:console.log("值为0,表示正在连接"+WebSocket.CONNECTING);break;
    case WebSocket.OPEN:console.log("值为1表示连接成功，可以通信"+WebSocket.OPEN);break;
    case WebSocket.CLOSING:console.log("值为2表示正在关闭"+WebSocket.CLOSING);break;
    case WebSocket.CLOSED:console.log("值为3，表示连接已经关闭"+WebSocket.CLOSED)

  }
  
  ws.onerror=function (event) {
    console.log("报错")
  }

}









