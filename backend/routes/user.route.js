import express from 'express'
import { createUser, getAllUsers, updateUser, deleteUser,loginUser, forgotPassword, resetPassword, changePassword } from '../controllers/user.controller.js';

const router = express.Router();

router.get('/', getAllUsers);
router.post('/', createUser);
router.post('/login', loginUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

router.put('/change-password/:id', changePassword);
router.post('/forgot-password', forgotPassword);
router.post('/reset-password/:token', resetPassword);

export default router;
