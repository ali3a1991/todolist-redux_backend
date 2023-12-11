import express from 'express'
import { encrypt } from '../middlewares/encrypt.js'
import { login, register } from '../controllers/userController.js'

export const router = new express.Router()

router.post('/register', encrypt, register)
router.post('/login', encrypt, login)