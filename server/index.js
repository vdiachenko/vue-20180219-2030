const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const PORT = process.env.PORT || 9000

server.use(router)
server.listen(PORT, () => {
    console.log('JSON Server is running on port:', PORT)
})
