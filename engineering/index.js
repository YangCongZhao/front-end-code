window.__Moudle__ = {
    api(){
        return {
            code:0,
            data:{
                a:1,
                b:2
            }
        }
    },
    handle(data,key){
        return data.data[key];
    },
    sum(a,b){
        return a + b
    }
}
const Module = window.__Moudle__;
const resultData = window.__Moudle__.api();
const a = Module.handle(resultData,'a');
const b = Module.handle(resultData,'b');
console.log(Module.sum(a, b));//3

