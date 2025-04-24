/*
node 文件操作
 */
// 如何读取文件中的内容
let fs = require('fs');
let path = require('path')

function getPath(val) {
    return path.resolve(__dirname, val)
}

fs.stat(getPath('users'), (err, stats) => {
    if (err) {
        console.error(err)
    }
    console.log(stats);
})