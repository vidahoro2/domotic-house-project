import { pool } from '../db.js';

export const getUsers = (req, res) => {
    console.log('getUsers');
}
export const getUser = (req, res) => {
    console.log('getUser');
}
export const insertUser = async (req, res) => {
    const {fullname, address, phone, email, username, password} = req.body;

    const [result]  = await pool.query('insert into users (fullname, address, phone, email, username, password) values (?, ?, ?, ?, ?, ?)',[fullname,address,phone,email,username,password]);
    res.json({
        id:result.insertId,
        fullname,
        address,
        phone,
        email,
        username,
        password
    })
}
export const updateUser = (req, res) => {
    console.log('updateUser');
}
export const deleteUser = (req, res) => {
    console.log('deleteUser');
}