import express from 'express';
const router = express.Router();
import { userController } from '../controller/users/userController';
const userCtrl: userController = new userController();
router.route('/user')
    .post(userCtrl.onRegisterMember)
export default router;