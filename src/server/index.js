import express from 'express';//import express, framework for backend server
import { PORT } from './config.js';//import the PORT from the archive config.js
import { pool } from './db.js';
import session from 'express-session';
import MySQLStoreModule from 'express-mysql-session';
const MySQLStore = MySQLStoreModule(session);

//ROUTES
import indexRoutes from './routes/index.routes.js';
import userRoutes from './routes/users.routes.js';

const app = express();//save the framework at the local

//MIDDLEWARES
app.use(session({
    secret: 'domotic-house-session',
    resave: false,
    saveUninitialized: false,
    store: new MySQLStore({
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: '',
        database: 'db_domotic_house'
    })
}))

app.use(express.json());//process data client in JSON format

app.use(indexRoutes);
app.use(userRoutes);


app.listen(PORT);//port for the backend server
console.log(`Server listening on port ${PORT}`); 