/*
node 文件操作
 */
// 如何读取文件中的内容
let fs = require('fs');
let path = require('path')

function getPath(val) {
    return path.resolve(__dirname, val)
}

fs.readFile(getPath('./a.txt'), 'utf8', function (err, data) {
    console.log(err, data);
})
//写入文件 会整个清空
fs.writeFile(getPath('./a.txt'), 'utf8heihei', function (err, data) {

})
//写入文件 追加
fs.appendFile(getPath('./a.txt'), '追加哈哈', function (err, data) {

})
