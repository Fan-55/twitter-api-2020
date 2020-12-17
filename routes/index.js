const express = require('express')
const router = express.Router()

//controllers
const userController = require('../controllers/userController')
const tweetController = require('../controllers/tweetController')
const likeController = require('../controllers/likeController')
const replyController = require('../controllers/replyController')
const followshipController = require('../controllers/followshipController')

//authorizers
const { authToken, authUserRole, authAdminRole } = require('../middleware/auth')

//routes


// like
router.post('/api/tweets/:id/like', authToken, authUserRole, likeController.createLike)
router.post('/api/tweets/:id/unlike', authToken, authUserRole, likeController.deleteLike)

//users
router.post('/api/login', userController.login)
router.post('/api/users', userController.createUser)

module.exports = router