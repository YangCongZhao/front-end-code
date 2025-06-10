// websocket-server.js
// 运行命令: node websocket-server.js

const WebSocket = require('ws')
const Y = require('yjs')
const { WebrtcProvider } = require('y-webrtc')

const host = process.env.HOST || 'localhost'
const port = process.env.PORT || 8080

// 存储所有房间的文档
const docs = new Map()

const wss = new WebSocket.Server({ 
  host, 
  port,
  perMessageDeflate: {
    zlibDeflateOptions: {
      threshold: 1024,
      concurrencyLimit: 10,
    },
    threshold: 1024,
  }
})

console.log(`WebSocket 服务器运行在 ws://${host}:${port}`)

wss.on('connection', (ws, req) => {
  console.log('新用户连接:', req.url)
  
  const url = new URL(req.url, `http://${req.headers.host}`)
  const roomName = url.pathname.slice(1) || 'default-room' // 从 URL 路径获取房间名
  
  // 获取或创建房间文档
  if (!docs.has(roomName)) {
    docs.set(roomName, new Y.Doc())
    console.log(`创建新房间: ${roomName}`)
  }
  
  const doc = docs.get(roomName)
  
  // 设置消息处理
  ws.on('message', (message) => {
console.log('收到消息:', message)
    try {
      const data = JSON.parse(message)
      
      if (data.type === 'sync') {
        // 同步文档状态
        const update = Y.encodeStateAsUpdate(doc)
        ws.send(JSON.stringify({
          type: 'sync',
          update: Array.from(update)
        }))
      } else if (data.type === 'update') {
        // 应用更新
        const update = new Uint8Array(data.update)
        Y.applyUpdate(doc, update)
        
        // 广播给房间内其他用户
        wss.clients.forEach(client => {
          if (client !== ws && client.readyState === WebSocket.OPEN) {
            client.send(message)
          }
        })
      } else if (data.type === 'awareness') {
        // 广播用户状态
        wss.clients.forEach(client => {
          if (client !== ws && client.readyState === WebSocket.OPEN) {
            client.send(message)
          }
        })
      }
    } catch (error) {
      console.error('消息处理错误:', error)
    }
  })
  
  ws.on('close', () => {
    console.log('用户断开连接')
  })
  
  ws.on('error', (error) => {
    console.error('WebSocket 连接错误:', error)
  })
  
  // 发送初始同步
  const stateVector = Y.encodeStateVector(doc)
  ws.send(JSON.stringify({
    type: 'sync-request',
    stateVector: Array.from(stateVector)
  }))
})

wss.on('error', (error) => {
  console.error('WebSocket 服务器错误:', error)
})

// 优雅关闭
process.on('SIGINT', () => {
  console.log('正在关闭 WebSocket 服务器...')
  wss.close(() => {
    console.log('WebSocket 服务器已关闭')
    process.exit(0)
  })
})
