const http = require('http');
let port = process.env.PORT || 4000;
const url = require('node:url');

/*
req 客户端的请求
res 服务器的响应
*/
const server = http.createServer((req, res) => {
   let arr = []
    req.on('data',function(data){
        arr.push(data)
   })

   res.statusCode = 200;
   res.statusMessage = 'success'
   res.end(JSON.stringify({'name':'yc'}))
//    req.on('end',function(){
//    let reqData =  Buffer.concat(arr).toString()
//    console.log(reqData)
//    })
})

server.listen(port,function(){
    console.log(`server  start ${port}`)
})
server.on('error',function(err){
    if(err.code==='EADDRINUSE'){
        server.listen(++port)
    }
})