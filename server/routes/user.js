import express from 'express'
import { createTodoController, deleteController, getAllDataController, getTodoController, loginController, updatedController } from '../controllers/userController.js'

const router=express.Router()

router.post('/login',loginController)
router.post('/get-login',getAllDataController)
router.get('/get-todo',getTodoController)
router.post('/create-todo',createTodoController)
router.delete('/delete-todo/:id',deleteController)
router.put('/update-todo/:id',updatedController)

export default router