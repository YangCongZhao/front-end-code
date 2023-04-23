import Router from 'koa-router'
const router = new Router()
router.prefix('/public')
// 确认修改邮件
router.get('/resetEmail')
export default router
