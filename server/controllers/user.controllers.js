import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import { pool } from "../db.js";
import { encryptPassword, matchPassword } from "../lib/helpers.js";

//This function is for know is the user is logging correctly
export const getLogin = passport.use('local.signin', new LocalStrategy({
  username: 'username',
  password: 'password',
  passReqToCallback: true
}, async(req, username, password, done) => {
  console.log(req.body);
}));

export const getUsers = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM users");
    res.json(result);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
export const getUser = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM users WHERE id = ?", [
      req.params.id,
    ]);
    if (result.length === 0) {
      return res.status(404).json({ message: "User not found" });
    } else {
      res.json(result[0]);
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
export const insertUser = async (req, res) => {
  try {
    let { fullname, address, phone, email, username, password } = req.body;
    password = await encryptPassword(req.body.password);

    const [result] = await pool.query(
      "INSERT INTO users (fullname, address, phone, email, username, password) values (?, ?, ?, ?, ?, ?)",
      [fullname, address, phone, email, username, password]
    );
    res.json({
      id: result.insertId,
      fullname,
      address,
      phone,
      email,
      username,
      password,
    });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
export const updateUser = async (req, res) => {
  try {
    //const {fullname, address, phone, email,username, password} = req.body;

    const result = await pool.query("UPDATE users SET ? WHERE id = ?", [
      req.body,
      req.params.id,
    ]);

    res.json(result);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
export const deleteUser = async (req, res) => {
  try {
    const [result] = await pool.query("DELETE FROM users WHERE id = ?", [
      req.params.id,
    ]);
    if (result.affectedRows === 0)
      return res.status(404).json({ message: "User not found" });
    return res.status(204).json({ message: "User deleted" });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
