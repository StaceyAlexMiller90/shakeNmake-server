const axios = require('axios')
const { Router } = require('express')
const authMiddleware = require('../auth/middleware')
const dotenv = require('dotenv')

dotenv.config()

const API_ID = process.env.API_ID
const API_KEY = process.env.API_KEY

const router = new Router()

router.post('/find', async (req, res, next) => {
	const { stringIngredients, offset, limit } = req.body
	try {
		const response = await axios.get(
			`https://api.edamam.com/search?q=${stringIngredients}&app_id=${API_ID}&app_key=${API_KEY}&from=${offset}&to=${limit}`
		)
		if (!response.data.count) {
			res.status(200).send({
				message: 'No recipes found, try removing some ingredients',
			})
		} else {
			res.status(200).send({
				message: 'Ok',
				data: {
					count: response.data.count,
					recipes: response.data.hits,
				},
			})
		}
	} catch (e) {
		res.status(400).send({ message: 'Something went wrong' })
		next(e)
	}
})

module.exports = router
