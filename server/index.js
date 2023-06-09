import express from 'express';//import express, framework for backend server
import cors from 'cors';
import { PORT } from './config.js';//import the PORT from the archive config.js
import { pool } from './db.js';
import session from 'express-session';
import MySQLStoreModule from 'express-mysql-session';
import passport from 'passport';
const MySQLStore = MySQLStoreModule(session);

//ROUTES
import indexRoutes from './routes/index.routes.js';
import userRoutes from './routes/users.routes.js';

//INITIALIZATIONS
const app = express();//save the framework at the local


//MIDDLEWARES
app.use(cors({
    //es el servidor que se va a conectar se pueden conectar más o todos si no se pone nada dentro de cors dejando la linea de codigo como app.use(cors());
    origin: 'http://localhost:5173'
}));
app.use(session({
    secret: 'domotic-house-session',
    resave: false,
    saveUninitialized: false,
    store: new MySQLStore(pool)
}));

app.use(express.json());//process data client in JSON format
app.use(passport.initialize());
app.use(passport.session());

//Routes
app.use(indexRoutes);
app.use(userRoutes);

//START THE SERVER
app.listen(PORT);//port for the backend server
console.log(`Server listening on port ${PORT}`); 