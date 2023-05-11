import mysql from 'mysql2';
import promifisy from 'util';
import { pool } from './db.js';

pool.getConnection((err, connection) => {
    if (err) {
        if (err.code === 'PROTOCOL_CONNECTION_LOST') { 
            console.error('Database connection was closed.');
        }
        if (err.code === 'ER_CON_COUNT_ERROR') { 
            console.error('Database has too many connections.');
        }
        if (err.code === 'ECONNREFUSED') { 
            console.error('Database connection was refused.');
        }
    }
    if (connection) connection.release();
    console.log('DDBB is connected');
    return;
});

// Pomisify pool querys
pool.query = promisify(pool.query);
module.exports = pool;