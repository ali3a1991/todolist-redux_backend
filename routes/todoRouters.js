import express from 'express'
import { addTodo } from '../controllers/todoController.js'

export const router = express.Router()

router.post('/addtodo', addTodo)