// function api(){
//     return {
//         code:0,
//         data:{
//             a:1,
//             b:2
//         }
//     }
// }
// //处理接口数据
// function handle(data,key){
//     return  data.data[key]
// }
//
// function sum(a,b){
//     return a+b
// }
// const data = api();
// const a = handle(data,'a')
// const b = handle(data,'b')
// console.log(sum(a , b));


(function (global){
    let x = 1
    function  api(){
        return {
            code:0,
            data:{
                a:1,
                b:2
            }
        }
    }
    function handle(data,key){
        return data.data[key];
    }
    function sum(a,b){
        return a + b
    }
    function getX(){
     return x;
    }
    window.__Moudle__ = {
        x,
        api,
        handle,
        sum,
        getX
    }
})()
// window.__Moudle__ = {
//     api(){
//         return {
//             code:0,
//             data:{
//                 a:1,
//                 b:2
//             }
//         }
//     },
//     handle(data,key){
//         return data.data[key];
//     },
//     sum(a,b){
//         return a + b
//     }
// }
// const Module = window.__Moudle__;
// const resultData = window.__Moudle__.api();
// const a = Module.handle(resultData,'a');
// const b = Module.handle(resultData,'b');
// console.log(Module.sum(a, b));//3


