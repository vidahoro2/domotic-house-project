import axios from 'axios';

export const insertUserRequest = async (user) =>
    await axios.post('http://localhost:4000/users', user);

export const loginUserRequest = async (user) =>
    await axios.get('http://localhost:4000/users', user);