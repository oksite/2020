const Koa = require('koa')
const convert = require('koa-convert')
const loggerGenerator  = require('./middleware/logger-async')
const app = new Koa()

app.use(convert(loggerGenerator()))

app.use( async ( ctx ) => {
  ctx.body = 'hello koa2'
})

app.listen(3000)
console.log('[demo] start-quick is starting at port 3000')