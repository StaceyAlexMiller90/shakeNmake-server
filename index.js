const express = require('express')
const loggerMiddleWare = require('morgan')
const { PORT } = require('./config/constants')
const corsMiddleWare = require('cors')
const authRouter = require('./routers/auth')
const recipieRouter = require('./routers/recipies')

const app = express()

app.use(corsMiddleWare())
app.use(loggerMiddleWare('dev'))

const bodyParserMiddleWare = express.json()
app.use(bodyParserMiddleWare)

app.use('/', authRouter)
app.use('/recipies', recipieRouter)

app.listen(PORT, () => {
	console.log(`Listening on port: ${PORT}`)
})
