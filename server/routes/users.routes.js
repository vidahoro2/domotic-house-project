import { Router } from 'express';
import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';

import{
    getUsers,
    getUser,
    insertUser,
    updateUser,
    deleteUser
} from '../controllers/user.controllers.js';

const router = Router();
/*
const getLogin = (req, res, next) => {
    passport.authenticate('local.signin', (err, user, info) => {
      if (err) {
        return console.error(err);
      }
      console.log(req.body);
    })(req, res, next);
};*/


router.get('/users', getUsers);

router.get('/users/:id', getUser);

router.post('/users', insertUser);

router.put('/users/:id', updateUser);

router.delete('/users/:id', deleteUser);


export default router;