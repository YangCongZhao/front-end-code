import combineRoutes from 'koa-combine-routers'
// 加载目录中的Router中间件
const moduleFiles = require.context('./modules', true, /\.js$/)
// reduce方法去拼接 koa-combine-router所需的数据结构 Object[]
const modules = moduleFiles.keys().reduce((items, path) => {
  const value = moduleFiles(path)
  items.push(value.default)
  return items
}, [])

export default combineRoutes(modules)
