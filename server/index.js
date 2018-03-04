const serve = require('koa-static')
const Koa = require('koa')
const config = require('config')
const logger = require('koa-logger')
const err = require('./middleware/error')
const { routes, allowedMethods } = require('./middleware/routes')

const app = new Koa()
const port = process.env.PORT || 9000

app.use(err)
app.use(serve('.'))
app.use(logger())
app.use(routes())
app.use(allowedMethods())

app.listen(port, () => {
    console.log('%s listening at port %d', config.app.name, port)
})

// const jsonServer = require('json-server')
// const server = jsonServer.create()
// const router = jsonServer.router('db.json')
// const PORT = process.env.PORT || 9000

// server.use(router)
// server.listen(PORT, () => {
//     console.log('JSON Server is running on port:', PORT)
// })
