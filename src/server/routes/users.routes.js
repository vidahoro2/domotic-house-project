
import { Router } from 'express';
import{
    getUsers,
    getUser,
    insertUser,
    updateUser,
    deleteUser
} from '../controllers/user.controllers.js';

const router = Router();

router.get('/users', getUsers);

router.get('/users/:id', getUser);

router.post('/users', insertUser);

router.put('/users/:id', updateUser);

router.delete('/users/:id', deleteUser);

export default router;