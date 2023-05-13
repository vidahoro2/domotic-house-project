import { createPool } from 'mysql2/promise'//import methods for database connection

export const pool = new createPool({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'db_domotic_house'
});