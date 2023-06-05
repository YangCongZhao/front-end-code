// 1. 导入http模块

const http = require('http')
const fs = require('fs')
const url = require('url')
//2. 创建服务器
    //获取到服务器的服务器对象
let server = http.createServer()

server.listen(3000,function (){
    console.log('http://localhost:3000');
})
server.on('request',function (req,res){
    res.setHeader('Content-type','text/html;charset=utf-8')
    if(req.method==='GET'){
        let parseUrl = url.parse(req.url,true);
        if(parseUrl.pathname==='/getImg'){
            console.log(parseUrl.query);
            fs.readFile('./index.html','utf-8',function(err,data){
                res.write(data)
                res.end()
            })
        }
    }else if(req.method==='POST'){
        let bufferData = ""
        req.on('data',function (d){
            bufferData+=d
        })
        req.on('end',function (){
            console.log('1212',require('querystring').parse(bufferData));
        })
        res.end()
    }



})