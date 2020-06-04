const axios = require('axios')
const { Router } = require('express')
const authMiddleware = require('../auth/middleware')
const dotenv = require('dotenv')

dotenv.config()

const API_ID = process.env.API_ID
const API_KEY = process.env.API_KEY

const router = new Router()

router.post('/find', async (req, res, next) => {
	console.log(req.body)
	// const response = await axios.get(
	// 	`https://api.edamam.com/search?q=${broccoli}&app_id=${API_ID}&app_key=${API_KEY}&from=0&to=1`
	// )
	res.status(200).send({
		message: 'Here are the recipies!',
		data: 'hello',
	})
})

module.exports = router
