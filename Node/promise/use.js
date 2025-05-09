//1.Promise是一个类，使用的时候需要new Promise来产生一个 promise实例
//2.构造函数中需要传递一个参数executor
//3.executor函数中有两个参数resolve(value) reject (reason)
//调用resolve会让promise变成成功调用reject会变成失败 pending等待态 fulfilled 成功态 rejected失败态 /一但状态发生变化后不能再修改状态
//4.每个promise实例都有一个then方法，会有两个参数onfulfilled, onrjected
//5.如果不调用resolve此时promise不会成功也不会失败（如果发生异常也会认为是失败）
//6.resolve之后不能reject相反也是
//7.executor是立刻执行的


const promise = new Promise((resolve, reject)=> {
        console.log('1')
        // resolve('成功')
        // reject('error')
        // throw new Error('error')
    }
)
    console. log('2')
    promise.then((value)=>{
        console.log('成功',value)
    },(reason)=>{
        console.log('失败',reason)
    });