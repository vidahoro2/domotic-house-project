import express from 'express';
const router = express.Router();

import passport from 'passport';
import { isLoggedIn, isNotLoggedIn } from '../lib/auth';