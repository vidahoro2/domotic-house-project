import { Router } from 'express';
import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';

import{
    getLogin,
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


//router.get('/users', getUsers);

router.get('/usersapi/:id', getUser);

router.post('/usersapi', insertUser);

router.put('/usersapi/:id', updateUser);

router.delete('/usersapi/:id', deleteUser);

router.post('/usersapilogin', getLogin);

export default router;