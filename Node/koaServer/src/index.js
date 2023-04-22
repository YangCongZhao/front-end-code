const Koa = require("koa");
const Router = require("koa-router");
// const cors = require('@koa/cors')
import cors from '@koa/cors'
import compose from 'koa-compose'

const {koaBody} = require('koa-body')
const app = new Koa();
const router = new Router();
router.prefix('/dev')
router.get("/", (ctx) => {
    ctx.body = '/'
});
const getApi = ()=>{
    return new Promise((resolve,reject)=>{
                setTimeout(()=>{
                    resolve('2s')
                },2000)
    })
}
router.get("/api", async (ctx) => {
    console.log(ctx.request.query);
    ctx.body = await getApi()
});
router.post('/post',async ctx=>{
    let {body} = ctx.request
    console.log(body);
    ctx.body = {
        ...body
    }
})
const middle = compose([
    koaBody(),
    cors(),
    router.routes(),
    router.allowedMethods()

])
app.use(middle);
app.listen(3000);
