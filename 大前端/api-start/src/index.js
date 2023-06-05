import cors from '@koa/cors'
import Koa from 'koa'
import koaBody from 'koa-body'
import compose from 'koa-compose'
import helmet from 'koa-helmet'
import jsonutil from 'koa-json'
import statics from 'koa-static'
import path from 'path'
import router from './routes/routes'
const app = new Koa()
/**
 * 使用koa-compose 集成中间件
 */
const middleware = compose([
  koaBody({
    multipart: true,
    formidable: {
      keepExtensions: true,
      maxFieldsSize: 5 * 1024 * 1024
    },
    onError: (err) => {
      console.log('koabody TCL: err', err)
    }
  }),
  statics(path.join(__dirname, '../public')),
  cors(),
  jsonutil({ pretty: false, param: 'pretty' }),
  helmet()
])

app.use(middleware)
app.use(router())

app.listen(7890)
